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

const transaction = user.transactionHistory[0];

export function Kyc() {
  return <div>Please complete kyc to withdraw</div>;
}
