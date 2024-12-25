import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "@/assets/avatars/Avatar-4.png";
import { user } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { ChevronRight, HelpCircle } from "lucide-react";
import { ProfileUpdateDrawer } from "@/components/ProfileUpdateDrawer";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    // <div className="w-full py-6 px-2 flex flex-col  justify-between pb-2 max-w-[350px] ">

    <div className="w-full py-6 px-2 flex flex-col  justify-between  gap-2 pb-20 min-w max-w-[375px]">
      <div className="flex flex-col justify-center items-center mb-4">
        <Avatar>
          <AvatarImage src={avatarImg} className="w-16 mb-1" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <p className="font-bold text-md text-center">{user.fullName}</p>
        <p className="text-xs  text-center">@ {user.username}</p>
      </div>

      {/* VErification level */}
      <div className="flex gap-2 self-center mb-4">
        <Badge className={`${user.verificationLevel === 1 ? "bg-white" : "bg-accent"}`}>
          Tier 1
        </Badge>
        <Badge className={`${user.verificationLevel === 2 ? "bg-white" : "bg-accent"}`}>
          Tier 2
        </Badge>
        <Badge className={`${user.verificationLevel === 3 ? "bg-white" : "bg-accent"}`}>
          Tier 3
        </Badge>
      </div>

      <div className="flex flex-col gap-3 w-full items-center">
        {/* <Card className="p-2 py-3 flex border-accent items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <div className="bg-pink-500 rounded-full p-2 flex items-center justify-center">
              <User size={"15px"} strokeWidth={3} />
            </div>
            <CardTitle className="text-sm ">Update Profile Info</CardTitle>
          </div> */}
        <ProfileUpdateDrawer />
        {/* <VerificationDrawer /> */}
        {/* </Card> */}

        <Link to={"/help"} className="w-full">
          <Card className="p-2  py-3 flex border-accent items-center  justify-between w-full">
            <div className=" flex items-center gap-2">
              <div className="bg-green-500 rounded-full p-2 flex items-center justify-center">
                <HelpCircle size={"15px"} strokeWidth={3} />
              </div>
              <CardTitle className="text-sm ">Help Center</CardTitle>
            </div>
            <ChevronRight className="" />
          </Card>
        </Link>

        <Link to={"/security"} className="w-full">
          <Card className="p-2  py-3 flex border-accent items-center  justify-between w-full">
            <div className=" flex items-center gap-2">
              <div className="bg-orange-600 rounded-full p-2 flex items-center justify-center">
                <HelpCircle size={"15px"} strokeWidth={3} />
              </div>
              <CardTitle className="text-sm ">Account Security</CardTitle>
            </div>
            <ChevronRight className="" />
          </Card>
        </Link>

        <Card className="p-2  py-3 flex border-accent items-center  justify-between w-full">
          <div className=" flex items-center gap-2">
            <div className="bg-red-500 rounded-full p-2 flex items-center justify-center">
              <HelpCircle size={"15px"} strokeWidth={3} />
            </div>
            <CardTitle className="text-sm ">Delete Account</CardTitle>
          </div>
          <ChevronRight className="" />
        </Card>
      </div>

      <p className="my-5 text-center text-xs">version 1.0.2</p>
      {/* <Button className=" font-semibold fixed bottom-[80px] right-5 left-5 w-full max-w-[320px] justify-self-center">
        Invite
      </Button> */}
    </div>
  );
};

export default Profile;
