import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/PrivateRouter";
import Register from "../pages/register/Register";
import Error from "../pages/shared/error/Error";
import DashboardLayout from "./../layout/DashboardLayout";
import Root from "./../layout/Root";
import AddProducts from "./../pages/addProducts/AddProducts";
import AdvertisedItem from "./../pages/advertised/AdvertisedItem";
import BookingForm from "./../pages/bookingForm/BookingForm";
import AllCar from "./../pages/car/allcar/AllCar";
import CarSingleDetails from "./../pages/car/carSingleDetails/CarSingleDetails";
import Catagories from "./../pages/catagories/Catagories";
import Dashboard from "./../pages/dashboard/Dashboard";
import MyOrders from "./../pages/dashboard/myOrders/MyOrders";
import OrderReviews from "./../pages/dashboard/orderReviews/OrderReviews";
import Users from "./../pages/dashboard/user/Users";
import AllElect from "./../pages/elect/allelect/AllElect";
import ElectSingleDetails from "./../pages/elect/electsingleDetails/ElectSingleDetails";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import AllMicro from "./../pages/micro/allmicro/AllMicro";
import SeeDetails from "./../pages/micro/seeDetails/SeeDetails";
import Shop from "./../pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/catagories",
        element: (
          <PrivateRouter>
            <Catagories />
          </PrivateRouter>
        ),
      },
      {
        path: "/advertise",
        element: (
          <PrivateRouter>
            <AdvertisedItem />
          </PrivateRouter>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/shop", element: <Shop /> },
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
        path: "/addProducts",
        element: (
          <PrivateRouter>
            <AddProducts />
          </PrivateRouter>
        ),
      },
      {
        path: "/bookingForm/:id",
        element: (
          <PrivateRouter>
            <BookingForm />
          </PrivateRouter>
        ),
        loader: async () => fetch("http://localhost:5000/all-micro"),
      },
    ],
  },

  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <PrivateRouter>
            <MyOrders />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/orderReviews",
        element: (
          <PrivateRouter>
            <OrderReviews />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <PrivateRouter>
            <Users />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
