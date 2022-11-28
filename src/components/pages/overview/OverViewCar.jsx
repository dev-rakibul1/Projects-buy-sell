import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OverViewCar = () => {
  return (
    <div className="hero h-full py-7">
      <div className="hero-content w-full text-left">
        <div className="max-w-md mr-auto">
          <h2 className="car-font text-secondary text-2xl">BMW X6</h2>
          <h1 className="mb-5 text-4xl font-bold hero-title text-green-700">
            37% Off for new years 2023
          </h1>
          <p className="mb-5">
            The happy new years 2023 for 37% off and you get with other
            opportunity from our company. This flexibility for the happy new
            years 2023.
          </p>

          <Link to="/detailsSingleCar/637f2283061abaa72317f8b4">
            <button className="btn btn-secondary rounded-full btn-md">
              View details
              <FaAngleRight className="text-center ml-3 font-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverViewCar;
