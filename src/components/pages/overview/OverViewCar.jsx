import React from "react";
import { FaAngleRight } from "react-icons/fa";

const OverViewCar = () => {
  return (
    <div className="hero h-full py-7">
      <div className="hero-content w-full text-left">
        <div className="max-w-md mr-auto">
          <h1 className="mb-5 text-4xl font-bold text-black hero-title">
            37% Off for new years 2023
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary rounded-full btn-md">
            View details
            <FaAngleRight className="text-center ml-3 font-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverViewCar;
