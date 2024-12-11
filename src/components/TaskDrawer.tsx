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
import { Task } from "@/types";

export function TaskDrawer(task: Task) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="">Start</Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className=" flex justify-center">
            <DrawerTitle>{task.title}</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className=" pb-0"></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
