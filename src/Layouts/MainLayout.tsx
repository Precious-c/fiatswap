import BottomNavigation from "@/components/BottomNavigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex justify-center px-1">
      <Outlet />
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
