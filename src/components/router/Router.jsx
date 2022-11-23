import { createBrowserRouter } from "react-router-dom";
import Root from "./../layout/Root";
import Catagories from "./../pages/catagories/Catagories";
import Home from "./../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catagories", element: <Catagories /> },
    ],
  },
]);

export default router;
