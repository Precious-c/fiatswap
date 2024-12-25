import { Card } from "./ui/card";
import { user } from "@/data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Check, Download, HourglassIcon, X } from "lucide-react";
import Currency from "@/utils/Currency";

const TransactionHistory = () => {
  return (
    // <Card className="p-4 z-10 mb-16 border-0">
    //   <CardTitle className="my-2 mb-4 text-lg">Transaction History</CardTitle>
    //   <CardContent className="p-0 flex flex-col gap-4">
    //     {user.transactionHistory.map((transaction) => (
    //       <TransactionCard transaction={transaction} key={transaction.id} />
    //     ))}
    //   </CardContent>
    // </Card>

    <Card className="p-4 z-10 mb-16 border-0">
      <h2 className="my-2 mb-4 text-lg">Transaction History</h2>

      <Accordion type="single" collapsible className="flex flex-col gap-3">
        {user.transactionHistory.map((transaction) => (
          <Card className="p-3 rounded-sm bg-[#0f0f0f] border-0 drop-shadow-md shadow-[#302f2f]">
            <AccordionItem value={transaction.id} className=" ">
              <AccordionTrigger className="text-left flex justify-between w-full font-semibold">
                <div className="w-full  flex justify-between ">
                  <div className="flex justify-between gap-2">
                    <Download className="mt-1 mr-1" />
                    <div>
                      <h4 className=" font-bold ">Withdraw</h4>
                      <p className="text-sm">{transaction.cryptoSymbol}</p>
                      <p className="text-accent font-bold">
                        {transaction.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-end">
                      <Currency currency="NGN" price={transaction.total} />
                    </p>
                    <p
                      className={` text-end flex gap-1 items-center
                        ${
                          transaction.status === "completed"
                            ? "text-green-600"
                            : transaction.status === "cancelled"
                            ? "text-red-500"
                            : "text-gray-400"
                        }
                      `}
                    >
                      <div
                        className={`rounded-full  w-[18px] h-[18px] p-1 flex justify-center items-center 
                          ${
                            transaction.status === "completed"
                              ? "bg-green-600"
                              : transaction.status === "cancelled"
                              ? "bg-red-600"
                              : "bg-none"
                          }`}
                      >
                        {transaction.status === "completed" ? (
                          <Check strokeWidth={4} className="text-white w-3 h-3 " />
                        ) : transaction.status === "pending" ? (
                          <HourglassIcon strokeWidth={4} className="text-white w-3 h-3 " />
                        ) : (
                          <X strokeWidth={4} className="text-white w-3 h-3 " />
                        )}
                      </div>
                      {transaction.status.replace(
                        transaction.status.charAt(0),
                        transaction.status[0].toUpperCase()
                      )}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-4 ">
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
              </AccordionContent>
            </AccordionItem>
          </Card>
        ))}
      </Accordion>
    </Card>
  );
};

{
  /* <Card className="py-2">
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
    </Card> */
}

export default TransactionHistory;
