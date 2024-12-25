import { bouncy } from "ldrs";
bouncy.register();
import { Button } from "@/components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardTitle } from "./ui/card";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function AccountSecurity() {
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  useEffect(() => {
    console.log({ newPassword, confPassword });
  }, [newPassword, confPassword]);

  const handleChangePassWord = () => {
    console.log({ newPassword, confPassword });
    newPassword && confPassword && newPassword === confPassword
      ? toast.success("Password Updated", {
          icon: "🤝",
          style: { backgroundColor: "black", color: "white" },
        })
      : toast.error("Invalid Password", {
          icon: "❌",
          style: { backgroundColor: "black", color: "white" },
        });
  };

  return (
    <div className="p-4  pb-16">
      <div className="mx-auto w-full max-w-sm">
        <h2 className="text-lg font-bold text-center">Account Security</h2>

        <div className=" pb-0 ">
          <div className="mt-4 flex flex-col gap-2">
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
              ></Input>
            </div>
            <div>
              <Label htmlFor="confPassword">Confirm Password</Label>
              <Input
                id="confPassword"
                type="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfPassword(e.target.value)}
              ></Input>
              {newPassword !== confPassword && (
                <p className="text-red-600 text-xs">Passwords do not match</p>
              )}
            </div>
          </div>
          <Button onClick={handleChangePassWord} className="mt-3">
            Save
          </Button>
        </div>

        <Card className="mt-4 p-2  py-3 flex border-0 items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <CardTitle className="text-sm text-muted">Two Factor Authentication </CardTitle>
          </div>
        </Card>

        <Card className="my-4 p-2  py-3 flex border-0 items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <CardTitle className="text-sm text-muted">Security Questions</CardTitle>
          </div>
        </Card>
      </div>
    </div>
  );
}
