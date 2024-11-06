"use client";

import { Badge } from "@/app/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-primary/10 hover:bg-muted text-primary font-bold">
            <CircleIcon className="fill-primary mr-2" size={10} />
            Deposito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="text-danger hover:bg-danger/10 bg-danger/10 font-bold">
            <CircleIcon className="fill-danger mr-2" size={10} />
            Despesa
          </Badge>
        );
      }
      return (
        <Badge className="text-white hover:bg-white/10 bg-white/10 font-bold">
          <CircleIcon className="fill-white mr-2" size={10} />
          Investimento
        </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
  },
];
