import { TaskDrawer } from "@/components/TaskDrawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { tasks } from "@/data";
import { Check } from "lucide-react";

const Tasks = () => {
  // const [taskStatus, setTaskStatus] = useState<"notCompleted" | "pending" | "completed">(
  //   "notCompleted"
  // );

  return (
    // className="py-6 px-4 flex flex-col  justify-between pb-28 max-w-[350px]"
    <div className="w-full py-6 px-2 flex flex-col  justify-between pb-2 max-w-[350px]">
      <div className="mb-6 ">
        <h2 className="font-bold text-2xl text-center mb-4">Tasks</h2>
        <p className="text-center">
          Earn up to 1250 points for every friend who signs up and completes their first transaction
        </p>
      </div>

      {/* active tasks list */}
      <div className="mb-10">
        <h5 className="font-semibold mb-4 text-lg">Active tasks</h5>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <Card className="p-2 px-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{task.title}</h4>
                <p className="">+ {task.reward}</p>
              </div>
              <TaskDrawer task={task} />
            </Card>
          ))}
        </div>
      </div>

      {/* completed tasks list */}

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
