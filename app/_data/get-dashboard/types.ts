import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  categoty: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
