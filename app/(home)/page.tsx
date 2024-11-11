import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chat";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCateory from "./_components/expenses-per-cateory";
import LastTransacation from "./_components/last-transacation";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";

interface Props {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: Props) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsValid = !month || !isMatch(month, "MM");
  if (monthIsValid) {
    const month = new Date().getMonth() + 1;
    redirect(`/?month=${month}`);
  }

  const dashboard = await getDashboard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6 flex flex-col overflow-hidden">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold"> Dashboard </h1>
          <div className="flex items-center gap-3">
            <AiReportButton month={month} />
            <TimeSelect />
          </div>
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction!}
            />
            <div className="grid grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCateory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransacation lastTransaction={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
