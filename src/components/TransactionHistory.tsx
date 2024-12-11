import { Card, CardContent, CardTitle } from "./ui/card";
import { user } from "@/data";
import TransactionCard from "./TransactionCard";

const TransactionHistory = () => {
  return (
    <Card className="p-4 z-10 mb-16 border-0">
      <CardTitle className="my-2 mb-4 text-lg">Transaction History</CardTitle>
      <CardContent className="p-0 flex flex-col gap-4">
        {user.transactionHistory.map((transaction) => (
          <TransactionCard transaction={transaction} key={transaction.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
