import { Transaction } from "@/types";
import { Card, CardContent } from "./ui/card";
import Currency from "@/utils/Currency";

interface transactionProp {
  transaction: Transaction;
}

const TransactionCard = ({ transaction }: transactionProp) => {
  return (
    <Card className="py-2">
      <CardContent className="flex flex-col gap-2">
        <div className="h-8 flex justify-between mb-4">
          <div className="">
            <h4 className="text-green-600 font-bold ">
              Withdraw <span className="text-white">{transaction.cryptoSymbol}</span>
            </h4>
            <p className="text-accent font-bold">{transaction.timestamp.toLocaleDateString()}</p>
          </div>
          <p
            className={`
               ${
                 transaction.status === "completed"
                   ? "text-green-600"
                   : transaction.status === "pending"
                   ? "text-yellow-500"
                   : "text-red-600"
               }
              `}
          >
            {transaction.status.replace(
              transaction.status.charAt(0),
              transaction.status[0].toUpperCase()
            )}
          </p>
        </div>

        <div className=" text-sm">
          <div className="flex justify-between">
            <p>Total Amount</p>
            <p>
              <Currency currency="NGN" price={transaction.total} />
            </p>
          </div>

          <div className="flex justify-between">
            <p>Quantity</p>
            <p>{transaction.qty}</p>
          </div>

          <div className="flex justify-between">
            <p>Market Price</p>
            <p>
              <Currency currency="USD" price={transaction.price} />
            </p>
          </div>

          <div className="flex justify-between">
            <p>Rate</p>
            <p>
              <Currency currency="USD" price={1} /> ~{" "}
              <Currency currency="NGN" price={transaction.rate} />
            </p>
          </div>

          <div className="flex justify-between">
            <p>Transaction Fee</p>
            <p>
              <Currency currency="NGN" price={transaction.transactionFee} />
            </p>
          </div>

          <div className="flex justify-between">
            <p>Transaction ID</p>
            <p>{transaction.id}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionCard;
