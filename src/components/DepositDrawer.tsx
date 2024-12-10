import { bouncy } from "ldrs";
bouncy.register();
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { user } from "@/data";
import { Card } from "./ui/card";
import toast from "react-hot-toast";

const transaction = user.transactionHistory[0];

export function DepositDrawer() {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => setLoading(false), 3000);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-purple-800 rounded-xl w-36 focus:bg-purple-900"
          onClick={() => setLoading(true)}
        >
          Deposit
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>Deposit Crypto</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0">
            {loading ? (
              <div className="h-40 flex justify-center items-center">
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </div>
            ) : (
              <div className="mx-auto w-full max-w-sm">
                <div className=" pb-0">
                  <div className="flex items-center justify-center space-x-2 flex-col px-8 mb-6">
                    <p className="text-center mb-3">{`For tokens on ${user.wallet.network} network only`}</p>
                    <Card className="dark:bg-white w-[320px] h-[320] flex flex-col items-center justify-center p-4 gap-2">
                      <QRCodeSVG value="https://reactjs.org/" size={240} />
                      <div className="flex">
                        <p
                          className="dark:text-black break-all text-center font-mono"
                          onClick={() => {
                            navigator.clipboard.writeText(user.wallet.address);
                            toast.success("Wallet address copied", {
                              icon: "🤝",
                              style: { backgroundColor: "black", color: "white" },
                            });
                          }}
                        >
                          {transaction.walletAddress}
                          <Badge className="ml-2 dark:bg-accent dark:text-white">copy</Badge>
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
