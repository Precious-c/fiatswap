import { TaskDrawer } from "@/components/TaskDrawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { tasks } from "@/data";
import { Check } from "lucide-react";

const Tasks = () => {
  return (
    <div className="w-full py-6 px-4 flex flex-col  justify-between pb-2">
      <div className="mb-6 ">
        <h2 className="font-bold text-2xl text-center mb-4">Tasks</h2>
        <p className="text-center">
          Earn up to 1250 points for every friend who signs up and completes their first transaction
        </p>
      </div>

      <div className="mb-10">
        <h5 className="font-semibold mb-4 text-lg">Active tasks</h5>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <Card className="p-2 flex justify-between items-center">
              <div>
                <h4>{task.title}</h4>
                <p>+ {task.reward}</p>
              </div>
              <TaskDrawer task={task} />
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h5 className="font-semibold mb-4 text-lg">Completed tasks</h5>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <Card className="p-2 flex justify-between items-center">
              <div>
                <h4>{task.title}</h4>
                <p>+ {task.reward}</p>
              </div>
              <Button disabled className="rounded-full">
                <Check strokeWidth="4px" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
