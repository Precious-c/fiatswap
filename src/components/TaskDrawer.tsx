import { bouncy } from "ldrs";

bouncy.register();
import { Button } from "@/components/ui/button";
import { Task } from "@/types";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface taskDrawerProps {
  task: Task;
  // taskStatus: "notCompleted" | "pending" | "completed";
  // setTaskStatus(arg: "notCompleted" | "pending" | "completed"): void;
}

export function TaskDrawer({ task }: taskDrawerProps) {
  const [taskStatus, setTaskStatus] = useState<"notCompleted" | "pending" | "completed">(
    "notCompleted"
  );

  useEffect(() => {
    taskStatus === "pending" && setTimeout(() => setTaskStatus("completed"), 10000);
  }, [taskStatus]);

  const handleClick = () => {
    taskStatus === "notCompleted" ? setTaskStatus("pending") : setTaskStatus("completed");
  };

  // console.log(task);
  return (
    <div>
      <Button asChild className="font-semibold rounded-full" onClick={handleClick}>
        <a href={task.link}>
          {taskStatus === "pending" ? (
            "Verifying..."
          ) : taskStatus === "completed" ? (
            <Check strokeWidth="4px" />
          ) : (
            "Start"
          )}
        </a>
      </Button>
    </div>
    // <Drawer>
    //   <DrawerTrigger asChild>
    //     <Button className="font-semibold">{taskStatus === "pending" ? "Verify" : "Start"}</Button>
    //   </DrawerTrigger>

    //   <DrawerContent>
    //     <div className="mx-auto w-full max-w-sm">
    //       <DrawerHeader className=" flex justify-center flex-col items-center">
    //         <DrawerTitle className="mb-4">{task.title}</DrawerTitle>
    //         <DrawerDescription className="">{task.description}</DrawerDescription>
    //         <p className="mb-4">+{task.reward}</p>

    //         {/* <a href={task.link}> */}
    //         <Button className="w-20" onClick={() => setTaskStatus("pending")}>
    //           {taskStatus === "pending" ? "Verify" : taskStatus === "completed" ? "Done" : "Start"}
    //         </Button>
    //         {/* </a> */}

    //         <p className="text-yellow-600 font-semibold">
    //           {taskStatus === "pending" && "Verifying"}
    //         </p>
    //         <p className="text-green-600 font-semibold">
    //           {taskStatus === "completed" && "Verified"}
    //         </p>
    //         {/* <p className="text-red-600 font-semibold">check in {timer}</p> */}
    //       </DrawerHeader>
    //       <div className=" pb-0"></div>
    //     </div>
    //   </DrawerContent>
    // </Drawer>
  );
}
