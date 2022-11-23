import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../pages/shared/footer/Footer";
import Navbar from "./../pages/shared/menu/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
