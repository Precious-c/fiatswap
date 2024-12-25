import { bouncy } from "ldrs";

bouncy.register();

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
import { Card, CardTitle } from "./ui/card";
import toast from "react-hot-toast";
import { Check, ChevronRight, ChevronsUpDown, User } from "lucide-react";
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

const formSchema = z.object({
  fullName: z.string(),
  // profilePicture: z.string().url(),
  email: z.string().email(),
  // password: z.string(),
  bankName: z.string(),
  accountName: z.string(),
  accountNumber: z.string().length(10, { message: "Account number must be 10 digits long" }),
});

export function ProfileUpdateDrawer() {
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
        <Card className="p-2 py-3 flex border-accent items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <div className="bg-pink-500 rounded-full p-2 flex items-center justify-center">
              <User size={"15px"} strokeWidth={3} />
            </div>
            <CardTitle className="text-sm ">Update Profile Info</CardTitle>
          </div>
          <ChevronRight />
        </Card>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>Profile Info</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0">
            {loading ? (
              <div className="h-40 flex justify-center items-center">
                <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
              </div>
            ) : (
              <div className="m-5">
                <Form {...form}>
                  <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fullname</FormLabel>
                          <FormControl>
                            <Input placeholder={user.fullName} {...field} />
                          </FormControl>
                          <FormDescription className="m-0 p-0">
                            This should be your legal name and must match the name on your bank
                            account.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder={user.email} type="email" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bankName"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Bank Name</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "w-[200px] justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? banks.find((bank) => bank.name === field.value)?.name
                                    : "Select bank"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 ml-5">
                              <Command>
                                <CommandInput placeholder="Search bank..." />
                                <CommandList>
                                  <CommandEmpty>No bank found.</CommandEmpty>
                                  <CommandGroup heading="Banks">
                                    {banks.map((bank) => (
                                      <CommandItem
                                        value={bank.name}
                                        key={bank.code}
                                        onSelect={() => {
                                          form.setValue("bankName", bank.name);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            bank.name === field.value ? "opacity-100" : "opacity-0"
                                          )}
                                        />
                                        {bank.name}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="accountNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Number</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder={user.bank.accountNumber} {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="accountName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Name</FormLabel>
                          <FormControl>
                            <Input placeholder={user.bank.accountName} {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
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
