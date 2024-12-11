import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { SelectCrypto } from "./SelectCrypto";
import { crypto, rate, user } from "@/data";
import { Input } from "./ui/input";
import getSymbolFromCurrency from "currency-symbol-map";
import Currency from "@/utils/Currency";
import { Button } from "./ui/button";
import { Crypto } from "@/types";

const Withdraw = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | undefined>();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => console.log(selectedCrypto), [selectedCrypto]);
  useEffect(() => console.log(amount), [amount]);

  // const handleAmountInput = (e: ChangeEvent | ) => {};

  return (
    <Card className=" bg-inherit w-full z-10 p-2 border-0 flex flex-col ">
      {/* <CardTitle className="my-2 mb-4 text-lg ">Withdraw naira</CardTitle> */}
      <CardContent className="flex gap-6 flex-col py-1 px-0 my-2">
        <div className="flex gap-2 flex-col  ">
          <div className="flex flex-col mb-2">
            <p className="mb-2">Asset</p>
            <SelectCrypto
              coins={crypto}
              selectedCrypto={selectedCrypto}
              setSelectedCrypto={setSelectedCrypto}
            />
          </div>

          <div>
            <p className="mb-2">Amount</p>
            <Card className="w-full  flex justify-between mb-1 p-0 focus:border-red-600">
              <Input
                type="number"
                className="w-full border-0 outline-0 focus-visible:ring-0 text-muted-foreground"
                placeholder="Amount"
                value={amount}
                onChange={(e: ChangeEvent) => setAmount(() => e.target.value)}
              ></Input>
              <Button
                variant="ghost"
                className="text-xs font-normal text-muted-foreground "
                onClick={() => setAmount(5000)}
              >
                MAX
              </Button>
            </Card>
          </div>

          <div>
            <p className="mb-2">You get</p>
            <Card className="p-4 py-1 flex flex-col gap-1 bg-inherit border-0">
              {/* <CardTitle className="font-semibold text-lg">You get</CardTitle> */}
              <CardContent className="flex gap-1 p-0 items-center">
                <div className="text-lg font-semibold ">
                  {getSymbolFromCurrency(user.preferredCurrency)}
                </div>
                <p className="text-lg font-semibold">{user.balance}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <p className="self-center text-xs">
          <Currency currency="USD" price={1} /> ~ <Currency currency="NGN" price={rate} />
        </p>

        <Button variant="outline">Withdraw</Button>
      </CardContent>
    </Card>
  );
};

export default Withdraw;
