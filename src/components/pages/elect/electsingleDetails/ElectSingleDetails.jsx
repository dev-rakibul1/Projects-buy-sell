import React, { useContext } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../../context/ContextProvider";

const ElectSingleDetails = () => {
  const singleData = useLoaderData();
  const { userInfo } = useContext(AuthContext);
  console.log(singleData);
  return (
    <div className="md:w-[90%] mx-auto px-2 my-16">
      <div className="card w-full">
        <figure>
          <img src={singleData.images} alt="car" className="rounded-lg" />
        </figure>
        <div className="card-body md:w-[50%] mx-auto">
          <h2 className="card-title text-center flex items-center justify-center text-secondary w-full text-4xl car-font font-normal">
            {singleData.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <div className="text-center">
            <p className="text-green-700 flex items-center justify-center">
              <span>
                Seller name :{" "}
                {singleData.sellerName ? singleData.sellerName : "Not found"}{" "}
              </span>
              <span
                className="w-7 h-7 bg-green-700 rounded-full text-center ml-5 flex items-center justify-center text-white"
                title="Seller verified"
              >
                {singleData?.sellerStatus === "verified" ||
                userInfo?.sellerStatus === "verified" ? (
                  <FaCheck className="text-center" />
                ) : (
                  <span title="Seller not verify">
                    <FaTimes />
                  </span>
                )}
              </span>
            </p>
            <p className="text-green-700">
              Release date :{" "}
              {singleData.postDate ? singleData.postDate : "Not found"}
            </p>
            <p className="text-green-700">
              Location :{" "}
              {singleData.location ? singleData.location : "Not found"}
            </p>
          </div>
          <div className="md:flex justify-between">
            <div>
              <p>
                <strong>Original price:</strong> {singleData.originalPrice}$
              </p>
              <p>
                <strong>Resale price:</strong> {singleData.resalePrice}$
              </p>
              <p>
                <strong>Use car:</strong> {singleData.yearsOfUse} years
              </p>
              <p>
                <strong>Weight:</strong> {singleData.weight} Metric ton
              </p>
            </div>

            <div>
              <p>
                <strong>Model:</strong> {singleData.model}
              </p>
              <p>
                <strong>Colors:</strong> {singleData.color}
              </p>
              <p>
                <strong>Speed:</strong> {singleData.speed}
              </p>
            </div>
          </div>
          <p>{singleData.description}</p>
          <div className="card-actions justify-center">
            <Link to={`/bookingForm/${singleData._id}`}>
              <div className="btn btn-secondary">Book now</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectSingleDetails;
