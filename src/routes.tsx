import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Referrals from "./pages/Referrals";
import Loading from "./pages/Loading";
import Profile from "./pages/Profile";
import { HelpCenter } from "./components/HelpCenter";
import { AccountSecurity } from "./components/AccountSecurity";

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
      {
        path: "help",
        element: <HelpCenter />,
      },
      {
        path: "security",
        element: <AccountSecurity />,
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
