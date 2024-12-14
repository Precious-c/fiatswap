import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes} />
      <Toaster />
    </div>
  );
}

export default App;
