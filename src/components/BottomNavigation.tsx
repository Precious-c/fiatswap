import { FileClock, HandCoins, HomeIcon, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation().pathname;
  // console.log(location);

  return (
    <div className="grid grid-cols-4 gap-4 fixed bottom-0 w-full rounded-t-xl bg-black py-3 px-2 z-10 max-w-[385px]">
      <Link to={"/"}>
        <div
          className={`text-white flex justify-center items-center flex-col cursor-pointer rounded-lg py-1 ${
            location === "/" && "text-purple-900"
          }`}
        >
          <HomeIcon className="text-xl" />
          <p className={`px-2 font-montserrat font-medium rounded-full text-xs`}>Home</p>
        </div>
      </Link>

      <Link to={"/referrals"}>
        <div
          className={`text-white flex justify-center items-center flex-col cursor-pointer rounded-lg py-1 ${
            location === "/referrals" && "text-purple-900"
          }`}
        >
          <Users className="text-xl" />
          <p className={`px-2 font-montserrat font-medium rounded-f text-xs`}>Frens</p>
        </div>
      </Link>

      <Link to={"/tasks"}>
        <div
          className={`text-white flex justify-center items-center flex-col cursor-pointer rounded-lg py-1 ${
            location === "/tasks" && "text-purple-900"
          }`}
        >
          <HandCoins className="text-xl" />
          <p className={`px-2 font-montserrat font-medium rounded-full text-xs`}>Earn</p>
        </div>
      </Link>

      <Link to={"/history"}>
        <div
          className={`text-white flex justify-center items-center flex-col cursor-pointer rounded-lg py-1 ${
            location === "/history" && "text-purple-900"
          }`}
        >
          <FileClock className="text-xl" />
          <p className={`px-2 font-montserrat font-medium rounded-full text-xs`}>History</p>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
