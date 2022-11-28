import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold hero-title">
            Choice your best car from gallery
          </h1>
          <p className="mb-5">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram.
          </p>
          <Link to="/catagories">
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

export default Hero;
