import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "@/assets/avatars/Avatar-3.png";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { user } from "@/data";

const Referrals = () => {
  return (
    <div className="py-6 px-4 flex flex-col  justify-between pb-28 max-w-[350px]">
      <div>
        <div className="mb-6 ">
          <h2 className="font-bold text-2xl text-center mb-4">Invite Friends</h2>
          <p className="text-center ">
            Earn up to 1250 points for every friend who signs up and completes their first
            transaction
          </p>
        </div>

        {/* friend stats */}
        <div className="mb-4 text-sm">
          <div className="flex justify-between">
            <p>Total frens </p>
            <p>20</p>
          </div>
          <div className="flex justify-between">
            <p>Total rewards </p>
            <p>20</p>
          </div>
        </div>

        {/* frens list */}
        <div className="flex flex-col gap-2">
          {user.referredFriends &&
            user.referredFriends.map((friend) => (
              <Card
                key={friend.username}
                className="flex items-center p-1 gap-2 justify-between border-0"
              >
                {/* <CardContent className="flex items-center gap-2"> */}
                <div className="flex items-center p-2 gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={avatarImg} sizes="20" />
                  </Avatar>
                  <div className=" flex flex-col text-sm gap-1">
                    <p>{friend.username}</p>
                    <p className="flex">
                      <Users size={16} />
                      10
                    </p>
                  </div>
                </div>
                <div className="pr-2 text-sm">
                  {friend.status === "completed" ? (
                    <p className="text-green-600">+{friend.rewardEarned}</p>
                  ) : (
                    <p className="text-gray-500">{friend.rewardEarned}</p>
                  )}
                </div>
                {/* </CardContent> */}
              </Card>
            ))}
        </div>
      </div>

      <Button className=" font-semibold fixed bottom-[80px] right-5 left-5 w-full max-w-[320px] justify-self-center">
        Invite
      </Button>
    </div>
  );
};

export default Referrals;
