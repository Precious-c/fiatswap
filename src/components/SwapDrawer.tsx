import { bouncy } from "ldrs";

bouncy.register();
import { QRCodeSVG } from "qrcode.react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { user } from "@/data";
import { Card } from "./ui/card";
// import { copyToClipboard } fro@/utils/copyToClipboardard";
import toast, { Toaster } from "react-hot-toast";
const transaction = user.transactionHistory[0];

export function SwapDrawer() {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => setLoading(false), 3000);
  //   const handleSwap = () => {
  //     setTimeout(() => {}, 3000);
  //   };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={() => setLoading(true)}>
          Convert
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>Convert Crypto</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0">
            {loading ? (
              <div className="h-40 flex justify-center items-center">
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 flex-col px-8 mb-6">
                <p className="text-center mb-3">{`Send only ${transaction.qty} ${transaction.cryptoSymbol} to this address, or you might loose your funds`}</p>

                <Card className="dark:bg-white w-[320px] h-[320] flex flex-col items-center justify-center p-4 gap-2">
                  <QRCodeSVG value="https://reactjs.org/" size={240} />
                  <div className="flex">
                    <p className="dark:text-black break-all text-center font-mono">
                      {transaction.walletAddress}
                      <Button
                        className="ml-2"
                        onClick={() => {
                          navigator.clipboard.writeText(transaction.walletAddress);
                          toast.success("Wallet address copied", {
                            icon: "🤝",
                            style: { backgroundColor: "black", color: "white" },
                          });
                        }}
                      >
                        copy
                      </Button>
                    </p>
                  </div>
                </Card>

                {/* <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter> */}
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
