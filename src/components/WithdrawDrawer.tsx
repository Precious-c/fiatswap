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
import { useNavigate } from "react-router-dom";

import Withdraw from "./Withdraw";
import { Kyc } from "./Kyc";
import { Modal } from "./Modal";
const transaction = user.transactionHistory[0];

export function WithdrawDrawer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => setLoading(false), 3000);
  //   const handleSwap = () => {
  //     setTimeout(() => {}, 3000);
  //   };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="rounded-xl w-36 border-2 "
          onClick={() => setLoading(true)}
        >
          Withdraw
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>Withdraw Crypto</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0">
            {loading ? (
              <div className="h-40 flex justify-center items-center">
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2 flex-col px-6 mb-6">
                {!user.isVerified ? <Kyc /> : <Withdraw />}

                {/* <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">
                    <Modal />
                    </Button>
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
