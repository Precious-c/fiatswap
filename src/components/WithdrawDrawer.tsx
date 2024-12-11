import { bouncy } from "ldrs";

bouncy.register();
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerDescription,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { user } from "@/data";
// import { copyToClipboard } fro@/utils/copyToClipboardard";
import Withdraw from "./Withdraw";
import { Kyc } from "./Kyc";

export function WithdrawDrawer() {
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
