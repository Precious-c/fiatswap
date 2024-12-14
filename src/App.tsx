import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-[100vw] max-w-[375px]">
      <RouterProvider router={Routes} />
      <Toaster />
    </div>
  );
}

export default App;
