"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  generateAiReportSchema,
  GenerateAiReportSchema,
} from "../_actions/generate-ai-report/schema";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/app/_lib/prisma";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const ConnectAi = async ({ month }: GenerateAiReportSchema) => {
  generateAiReportSchema.parse({ month });
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await clerkClient().users.getUser(userId);
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";
  if (!hasPremiumPlan) {
    throw new Error("You need a premium plan to generate AI reports");
  }

  const transactions = await db.transaction.findMany({
    where: {
      date: {
        gte: new Date(`2024-${month}-01`),
        lte: new Date(`2024-${month}-31`),
      },
    },
  });
  const content = `Gere um relatório com insights sobre as minhas finanças, com dias e orientações de como melhorar minha vida financeira. As transações estão dividas por ponto e virgula. A estrutura de cada uma é {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. Mostre as minhas transações de um jeito mais organizavel e legivel. São elas:
      ${transactions
        .map(
          (transaction) =>
            `${transaction.date.toLocaleDateString("pt-BR")}-${transaction.amount}-${transaction.type}-${transaction.category}`,
        )
        .join(";")}`;

  const result = await model.generateContent(content);

  console.log(result.response.text());
  console.log(result.response.text());
  return await result.response.text();
};