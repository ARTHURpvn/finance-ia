import { db } from "../_lib/prisma";
import UpsertTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

const TransitionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const transaction = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6 overflow-hidden">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold ">Transações</h1>
          <UpsertTransactionButton
            userCanAddTransaction={userCanAddTransaction}
          />
        </div>
        <ScrollArea>
          <DataTable
            columns={transactionColumns}
            data={JSON.parse(JSON.stringify(transaction))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransitionPage;
