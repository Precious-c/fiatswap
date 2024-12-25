import { bouncy } from "ldrs";

bouncy.register();
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { banks, user } from "@/data";
import { Card, CardContent, CardTitle } from "./ui/card";
// import { copyToClipboard } fro@/utils/copyToClipboardard";
import toast from "react-hot-toast";
import { Check, ChevronRight, ChevronsUpDown, User, Verified } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { UpdateInfoform } from "./UpdateInfoform";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { CommandList } from "cmdk";
import { Badge } from "./ui/badge";

const transaction = user.transactionHistory[0];

const formSchema = z.object({
  fullName: z.string(),
  // profilePicture: z.string().url(),
  email: z.string().email(),
  // password: z.string(),
  bankName: z.string(),
  accountName: z.string(),
  accountNumber: z.string().length(10, { message: "Account number must be 10 digits long" }),
});

export function VerificationDrawer() {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => setLoading(false), 2000);

  // form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      // password: "",
      bankName: user.bank.bankName,
      accountName: user.bank.accountName,
      accountNumber: user.bank.accountNumber,
    },
  });

  // submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    toast.success("Profile Updated", {
      icon: "🤝",
      style: { backgroundColor: "black", color: "white" },
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="p-2  py-3 flex border-accent items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center">
              <Verified size={"15px"} strokeWidth={3} />
            </div>
            <CardTitle className="text-sm ">Verification</CardTitle>
          </div>
          <ChevronRight className="" />
        </Card>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>Verify Account</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0">
            {loading ? (
              <div className="h-40 flex justify-center items-center">
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </div>
            ) : (
              <div className="m-5 flex flex-col">
                {/* VErification level */}
                <div className="flex gap-2 self-center mb-4">
                  <Badge className={`${user.verificationLevel === 1 ? "bg-white" : "bg-accent"}`}>
                    Tier 1
                  </Badge>
                  <Badge className={`${user.verificationLevel === 2 ? "bg-white" : "bg-accent"}`}>
                    Tier 2
                  </Badge>
                  <Badge className={`${user.verificationLevel === 3 ? "bg-white" : "bg-accent"}`}>
                    Tier 3
                  </Badge>
                </div>
                <Form {...form}>
                  <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="bvn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BVN</FormLabel>
                          <FormControl>
                            <Input placeholder={user.fullName} {...field} />
                          </FormControl>
                          <FormDescription className="m-0 p-0"></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BVN</FormLabel>
                          <FormControl>
                            <Input placeholder={user.fullName} {...field} />
                          </FormControl>
                          <FormDescription className="m-0 p-0"></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DrawerClose>
                      <Button type="submit">Save</Button>
                    </DrawerClose>
                  </form>
                </Form>
                {/* <UpdateInfoform /> */}
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
