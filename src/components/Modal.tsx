import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { ReactElement } from "react";

interface modalProps {
  btnText?: string;
  message: string;
  type: "error" | "success";
  loading: boolean;
  handleWithdraw: () => void;
}

export function Modal({ type, btnText, message, loading, handleWithdraw }: modalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[705]   rounded-lg" aria-describedby={type + "modal"}>
        {loading ? (
          <div className="h-40 flex justify-center items-center w-[170px]">
            <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>
          </div>
        ) : (
          <div>
            <AlertDialogHeader className="mb-2">
              <AlertDialogTitle className={`flex flex-col  items-center `}>
                <div
                  className={`dark:bg-white text-green-600 rounded-full w-min p-1 ${
                    type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {type === "success" ? <Check strokeWidth={4} /> : <X strokeWidth={3} />}
                </div>
              </AlertDialogTitle>
              <AlertDialogDescription>{message}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
              <AlertDialogAction>{btnText || "Okay"}</AlertDialogAction>
            </AlertDialogFooter>
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
