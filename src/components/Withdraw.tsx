import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { SelectCrypto } from "./SelectCrypto";
import { crypto, rate, user } from "@/data";
import { Input } from "./ui/input";
import Currency from "@/utils/Currency";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Modal } from "./Modal";
import { Crypto } from "@/types";

const Withdraw = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | undefined>();
  const [amount, setAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => console.log(selectedCrypto), [selectedCrypto]);
  // useEffect(() => console.log(amount), [amount]);
  // useEffect(() => console.log(total), [total]);

  const handleWithdraw = () => {
    console.log({ selectedCrypto, amount, total });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(
    () => setTotal(selectedCrypto ? selectedCrypto.price * amount * rate : 0),
    [amount, selectedCrypto]
  );
  // const handleAmountInput = (e: ChangeEvent | ) => {};

  return (
    <Card className=" w-full z-10 p-4 border-0 flex flex-col ">
      {/* <CardTitle className="my-2 mb-4 text-lg ">Withdraw naira</CardTitle> */}
      <CardContent className="flex gap-1 flex-col py-1 px-0 my-2">
        {/* <Card className="p-2"> */}
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm">From</p>
          <SelectCrypto
            coins={crypto}
            selectedCrypto={selectedCrypto}
            setSelectedCrypto={setSelectedCrypto}
          />
        </div>
        {/* </Card> */}

        <Card className="p-3 dark:bg-black border-0 ">
          <div className="flex justify-between">
            <p className="mb-2 text-sm ">Send</p>
            <Badge
              // variant="ghost"
              className="dark:bg-inherit text-xs font-normal dark:text-muted-foreground border-0"
              onClick={() => setAmount(5000)}
            >
              Max
            </Badge>
          </div>
          <CardContent className="flex justify-center p-0 gap-2 ">
            <Input
              type="number"
              className="w-full border-0 outline-0 focus-visible:ring-0   dark:text-muted-foreground p-0 px-2"
              placeholder="Amount"
              value={amount > 0 ? amount : ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAmount(() => Number(e.target.value))
              }
            ></Input>
            {selectedCrypto && (
              <div className="flex justify-center items-center mr-2">
                <img src={selectedCrypto.iconUrl} alt="" className="w-7" />
              </div>
            )}
          </CardContent>
        </Card>

        <div className="dark:bg-black p-2 rounded-lg self-center m-1">
          <ArrowUpDown size="15" />
        </div>

        <Card className="p-3 dark:bg-black border-0">
          <div className="flex justify-between">
            <p className="mb-2 text-sm ">You receive</p>
          </div>
          <CardContent className="flex justify-center p-0 ">
            <p className="w-full border-0 dark:text-muted-foreground p-0 font-bold.">
              <Currency currency={user.preferredCurrency} price={total} />
            </p>
          </CardContent>
        </Card>

        <p className="self-center text-xs my-4">
          <Currency currency="USD" price={1} /> ~ <Currency currency="NGN" price={rate} />
        </p>

        {/* <DrawerFooter>
          <DrawerClose asChild> */}
        {/* <Button variant="outline"> */}
        <Modal
          type="success"
          message="Withdraw successful, money is on the way to your account"
          loading={loading}
          handleWithdraw={handleWithdraw}
        />
        {/* </Button> */}
        {/* </DrawerClose>
        </DrawerFooter> */}

        {/* <Button variant="outline" className="" onClick={handleWithdraw}>
          Withdraw
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default Withdraw;
