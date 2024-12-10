import BottomNavigation from "@/components/BottomNavigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
