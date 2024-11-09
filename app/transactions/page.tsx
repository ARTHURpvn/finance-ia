import { db } from "../_lib/prisma";
import UpsertTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransitionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transaction = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold ">Transações</h1>
          <UpsertTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transaction} />
      </div>
    </>
  );
};

export default TransitionPage;
