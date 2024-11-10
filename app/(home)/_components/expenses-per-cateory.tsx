import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORIES_LABELS } from "@/app/_constantes";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface ExpensesPerCateoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCateory = ({
  expensesPerCategory,
}: ExpensesPerCateoryProps) => {
  return (
    <ScrollArea className="col-span-2 rounded-md border pb-6 h-full">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {expensesPerCategory.map((item) => (
          <div key={item.categoty} className="space-y-2">
            <div className="flex justify-between w-full">
              <p className="text-sm font bold">
                {TRANSACTION_CATEGORIES_LABELS[item.categoty]}
              </p>
              <p className="text-sm font bold">{item.percentageOfTotal}%</p>
            </div>
            <Progress value={item.percentageOfTotal} />
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCateory;
