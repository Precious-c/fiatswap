import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Referrals from "./pages/Referrals";
import Loading from "./pages/Loading";
import History from "./pages/Profile";
import Profile from "./pages/Profile";
// import Loading from "./pages/splash/Loading";
// import SplashLayout from "./Layouts/SplashLayout";
// import Premium from "./pages/splash/Premium";
// import Age from "./pages/splash/Age";
// import Username from "./pages/splash/Username";
// import ChannelJoined from "./pages/splash/ChannelJoined";
// import Home from "./pages/apps/Home";
// import Collaboration from "./pages/apps/Collaboration";
// import Leaderboard from "./pages/apps/Leaderboard";
// import Friends from "./pages/apps/Friends";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "referrals",
        element: <Referrals />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      //   {
      //     path: "friends",
      //     element: <Friends />,
      //   },
    ],
  },
  {
    path: "/splash",
    element: <Loading />,
  },
]);

export default Routes;
