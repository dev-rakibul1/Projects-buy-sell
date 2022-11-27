import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./../context/ContextProvider";
import Navbar from "./../pages/shared/menu/Navbar";

const DashboardLayout = () => {
  const { userInfo } = useContext(AuthContext);

  const { data: advertise, refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <Navbar />

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-layout"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  border border-gray-300 m-5">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side  border border-gray-300 m-5">
          <label htmlFor="dashboard-layout" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {userInfo.role === "seller" ||
            userInfo.role === "admin" ? undefined : (
              <li>
                <Link to="/dashboard/myOrders">My orders</Link>
              </li>
            )}
            {userInfo.role === "seller" ? (
              <li>
                <Link to="/dashboard/orderReviews">Order reviews</Link>
              </li>
            ) : undefined}

            {userInfo.role === "admin" ? (
              <li>
                <Link to="/dashboard/users">Users</Link>
              </li>
            ) : undefined}

            {userInfo?.role === "admin" ? undefined : (
              <li>
                <Link to="/dashboard/wishlist">Wishlist</Link>
              </li>
            )}
            {userInfo?.role === "admin" ? (
              <li>
                <Link to="/dashboard/user-report">Report</Link>
              </li>
            ) : undefined}
            {userInfo?.role === "seller" ? (
              <li>
                <Link to="/dashboard/myProducts">My products</Link>
              </li>
            ) : undefined}
            {userInfo?.role === "admin" ? (
              advertise?.length ? (
                <li>
                  <Link to="/dashboard/advertise">Advertise</Link>
                </li>
              ) : undefined
            ) : undefined}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
