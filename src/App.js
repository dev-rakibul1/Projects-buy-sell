import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
