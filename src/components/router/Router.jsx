import { createBrowserRouter } from "react-router-dom";
import Root from "./../layout/Root";
import AdvertisedItem from "./../pages/advertised/AdvertisedItem";
import BookingForm from "./../pages/bookingForm/BookingForm";
import AllCar from "./../pages/car/allcar/AllCar";
import CarSingleDetails from "./../pages/car/carSingleDetails/CarSingleDetails";
import Catagories from "./../pages/catagories/Catagories";
import AllElect from "./../pages/elect/allelect/AllElect";
import ElectSingleDetails from "./../pages/elect/electsingleDetails/ElectSingleDetails";
import Home from "./../pages/home/Home";
import AllMicro from "./../pages/micro/allmicro/AllMicro";
import SeeDetails from "./../pages/micro/seeDetails/SeeDetails";

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
      {
        path: "/allElect/:id",
        element: <AllElect />,
        loader: async () => fetch("http://localhost:5000/all-elect"),
      },
      {
        path: "/allCar/:id",
        element: <AllCar />,
        loader: async () => fetch("http://localhost:5000/all-car"),
      },
      {
        path: "/detailsSingleMicro/:id",
        element: <SeeDetails />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/all-micro/${params.id}`),
      },

      {
        path: "/detailsSingleElect/:id",
        element: <ElectSingleDetails />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/all-elect/${params.id}`),
      },
      {
        path: "/detailsSingleCar/:id",
        element: <CarSingleDetails />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/all-car/${params.id}`),
      },
      {
        path: "/bookingForm/:id",
        element: <BookingForm />,
        loader: async () => fetch("http://localhost:5000/all-micro"),
      },
    ],
  },
]);

export default router;
