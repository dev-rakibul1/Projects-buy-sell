import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../pages/shared/menu/Navbar";

const DashboardLayout = () => {
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
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
