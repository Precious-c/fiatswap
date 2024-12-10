import React from "react";
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "./ui/button";

export function ToastSimple() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Ahh shit",
          description: "fuck you!!!!!",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
