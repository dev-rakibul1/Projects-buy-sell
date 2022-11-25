import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./../context/ContextProvider";
import Navbar from "./../pages/shared/menu/Navbar";

const DashboardLayout = () => {
  const { userInfo } = useContext(AuthContext);

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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
