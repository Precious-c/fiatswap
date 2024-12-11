import { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { crypto } from "@/data";
import Currency from "@/utils/Currency";

const Assets = () => {
  // const [showAll, setShowAll] = useState<boolean>(false);
  const defaultRowsToDisplay = 5;
  const [rowsToDisplay, setRowsToDisplay] = useState<number>(defaultRowsToDisplay);

  const showMore = () => {
    rowsToDisplay === defaultRowsToDisplay
      ? setRowsToDisplay(crypto.length)
      : setRowsToDisplay(defaultRowsToDisplay);
  };

  return (
    <Card className="z-10 p-4 border-0">
      <CardTitle className="mb-5 font-poppins">Assets</CardTitle>
      <CardContent className="p-0 flex justify-between flex-col gap-4 ">
        {crypto.slice(0, rowsToDisplay).map((coin) => (
          <Card className="border-0 flex  h-10 items-center p-3 pl-0  rounded-none">
            <div className="flex  w-full items-center">
              <div className="dark:bg-black w-12 p-3 rounded-lg mr-4">
                <img src={coin.iconUrl} alt="" className="w-10" />
              </div>
              <div className=" ">
                <p className="text-gray-300 font-bold text-lg"> {coin.name}</p>
                <p className="text-gray-500  text-xs">{coin.symbol}</p>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end w-fit">
              <p className="text-gray-300 font-bold text-lg">
                <Currency currency={"USD"} price={coin.price} />
              </p>
              <p className="text-gray-500  text-xs font-semibold text-nowrap">{`25 ${coin.symbol}`}</p>
            </div>
          </Card>
        ))}
        <p className="self-end text-xs" onClick={showMore}>
          {rowsToDisplay === defaultRowsToDisplay ? "show more" : "show less"}
        </p>
      </CardContent>
    </Card>
  );
};

export default Assets;
