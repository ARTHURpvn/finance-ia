import { ArrowDownUpIcon } from "lucide-react";
import { db } from "../_lib/prisma";
import { Button } from "../components/ui/button";
import { DataTable } from "../components/ui/data-table";
import { transactionColumns } from "./_columns";

const TransitionPage = async () => {
  const transaction = await db.transaction.findMany({});

  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold ">Transações</h1>
        <Button className="rounded-full font-bold">
          <ArrowDownUpIcon />
          Adicionar Transação
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transaction} />
    </div>
  );
};

export default TransitionPage;
