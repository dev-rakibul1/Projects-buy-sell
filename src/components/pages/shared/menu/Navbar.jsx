import React, { useContext } from "react";
import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/ContextProvider";
import logo from "../../../images/logo.png";

const Navbar = () => {
  const { user, userInfo } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/shop">Shop</Link>
      </li> */}
      <li>
        <Link to="/catagories">Catagories</Link>
      </li>
      {/* <li>
        {userInfo?.role === "seller" || userInfo?.role === "admin" ? (
          <Link to="/advertise">Advertised</Link>
        ) : undefined}
      </li> */}

      <li>
        {userInfo?.role === "seller" || userInfo?.role === "admin" ? (
          <Link to="/addProducts">Add Product</Link>
        ) : undefined}
      </li>

      {user?.email && user?.uid ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : undefined}

      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email && user?.uid ? undefined : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-indigo-300">
      <div className="md:w-[90%] mx-auto px-2">
        <div className="navbar-start flex justify-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              title="Navbar"
            >
              <FaAlignRight />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-40"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl lg:text-end"
          >
            <div className="flex flex-col">
              <img src={logo} alt="logo" className="w-16 p-0 m-0" />
              <small className=" p-0 m-0 text-secondary font-thin">
                Seller car
              </small>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>

        <div className="ml-auto">
          <label
            tabIndex={1}
            className="btn btn-ghost lg:hidden"
            htmlFor="myDashboard"
            title="Dashboard"
          >
            <FaAlignLeft />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
