import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "@/assets/avatars/Avatar-4.png";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { user } from "@/data";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  return (
    <div className="w-full py-6 px-4 flex flex-col  justify-between items-center gap-2 pb-2 max-w-[350px]">
      <div className="flex flex-col gap-2">
        <Avatar>
          <AvatarImage src={avatarImg} className="w-16" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <p>@ {user.username}</p>
      </div>

      {/* VErification level */}
      <div className="flex gap-2">
        <Badge>Tier 1</Badge>
        <Badge>Tier 2</Badge>
        <Badge>Tier 3</Badge>
      </div>

      <Button className=" font-semibold fixed bottom-[80px] right-5 left-5 w-full max-w-[320px] justify-self-center">
        Invite
      </Button>
    </div>
  );
};

export default Profile;
