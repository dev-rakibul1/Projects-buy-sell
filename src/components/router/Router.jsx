import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../context/PrivateRouter";
import MyProducts from "../pages/dashboard/myProducts/MyProducts";
import Register from "../pages/register/Register";
import Error from "../pages/shared/error/Error";
import DashboardLayout from "./../layout/DashboardLayout";
import Root from "./../layout/Root";
import AddProducts from "./../pages/addProducts/AddProducts";
import AdvertisedItem from "./../pages/advertised/AdvertisedItem";
import Blog from "./../pages/blog/Blog";
import BookingForm from "./../pages/bookingForm/BookingForm";
import AllCar from "./../pages/car/allcar/AllCar";
import CarSingleDetails from "./../pages/car/carSingleDetails/CarSingleDetails";
import Catagories from "./../pages/catagories/Catagories";
import Dashboard from "./../pages/dashboard/Dashboard";
import MyOrders from "./../pages/dashboard/myOrders/MyOrders";
import OrderReviews from "./../pages/dashboard/orderReviews/OrderReviews";
import Users from "./../pages/dashboard/user/Users";
import UserReport from "./../pages/dashboard/userReport/UserReport";
import Wishlist from "./../pages/dashboard/wishlist/Wishlist";
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
        element: <Catagories />,
      },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/shop", element: <Shop /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/allMicro/:id",
        element: <AllMicro />,
        loader: async () =>
          fetch(" https://buy-sell-car-store-server.vercel.app/all-micro"),
      },
      {
        path: "/allElect/:id",
        element: <AllElect />,
        loader: async () =>
          fetch(" https://buy-sell-car-store-server.vercel.app/all-elect"),
      },
      {
        path: "/allCar/:id",
        element: <AllCar />,
        loader: async () =>
          fetch(" https://buy-sell-car-store-server.vercel.app/all-car"),
      },
      {
        path: "/detailsSingleMicro/:id",
        element: <SeeDetails />,
        loader: async ({ params }) =>
          fetch(
            ` https://buy-sell-car-store-server.vercel.app/all-micro/${params.id}`
          ),
      },

      {
        path: "/detailsSingleElect/:id",
        element: <ElectSingleDetails />,
        loader: async ({ params }) =>
          fetch(
            ` https://buy-sell-car-store-server.vercel.app/all-elect/${params.id}`
          ),
      },
      {
        path: "/detailsSingleCar/:id",
        element: <CarSingleDetails />,
        loader: async ({ params }) =>
          fetch(
            ` https://buy-sell-car-store-server.vercel.app/all-car/${params.id}`
          ),
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
        loader: async () =>
          fetch(" https://buy-sell-car-store-server.vercel.app/all-micro"),
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
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRouter>
            <Wishlist />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/user-report",
        element: (
          <PrivateRouter>
            <UserReport />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <PrivateRouter>
            <MyProducts />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/advertise",
        element: (
          <PrivateRouter>
            <AdvertisedItem />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
