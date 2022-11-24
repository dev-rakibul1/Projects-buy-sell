import { createBrowserRouter } from "react-router-dom";
import Root from "./../layout/Root";
import AdvertisedItem from "./../pages/advertised/AdvertisedItem";
import Catagories from "./../pages/catagories/Catagories";
import Home from "./../pages/home/Home";
import AllMicro from "./../pages/micro/allmicro/AllMicro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catagories", element: <Catagories /> },
      { path: "/advertise", element: <AdvertisedItem /> },
      {
        path: "/allMicro/:id",
        element: <AllMicro />,
        loader: async () => fetch("http://localhost:5000/all-micro"),
      },
    ],
  },
]);

export default router;
