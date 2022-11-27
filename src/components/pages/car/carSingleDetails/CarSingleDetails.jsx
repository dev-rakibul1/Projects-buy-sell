import React, { useContext, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../../context/ContextProvider";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CarSingleDetails = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const { userInfo } = useContext(AuthContext);

  // const handleCarSingleData = (data) => {
  //   console.log(data._id);

  //   fetch(`http://localhost:5000/all-car/${data._id}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  const { user } = useContext(AuthContext);
  const productData = useLoaderData();
  // console.log(productData);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const handleBookingForm = (data) => {
    console.log(data);

    const userBookingInfo = {
      name: data?.name,
      email: data?.email,
      productName: data?.productName,
      price: data?.price,
      phone: data?.phone,
      model: data?.model,
      color: data?.color,
      speed: data?.speed,
      images: data?.images,
      location: data?.address,
    };

    fetch("http://localhost:5000/user-booking-information", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          return navigate("/dashboard/myOrders");
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

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
            {/* modal data open */}
            <div>
              <input
                type="checkbox"
                id="applyActionModal"
                className="modal-toggle"
              />
              <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <label
                    htmlFor="applyActionModal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className=" text-center font-normal text-green-700 text-3xl car-font py-0">
                    Please ful-fill the booking form and submit for order.
                  </h3>

                  {/* booking form  */}

                  <div>
                    <div className="md:w-[95%] mx-auto border border-gray-300 p-7 my-16">
                      <h3 className="font-bold">Booking form</h3>
                      <form onSubmit={handleSubmit(handleBookingForm)}>
                        {/* products */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product title
                          </small>
                          <input
                            {...register("productName", { required: true })}
                            placeholder="Product name"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.title}
                            readOnly
                          />
                          {errors.productName?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Product name is required
                            </small>
                          )}
                        </div>
                        {/* price */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product price
                          </small>
                          <input
                            {...register("price", { required: true })}
                            placeholder="Product price"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.resalePrice}
                            readOnly
                          />
                          {errors.price?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Product price is required
                            </small>
                          )}
                        </div>

                        {/* model */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product model
                          </small>
                          <input
                            {...register("model", { required: true })}
                            placeholder="Product price"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.model}
                            readOnly
                          />
                          {errors.model?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Model price is required
                            </small>
                          )}
                        </div>
                        {/* speed */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product speed
                          </small>
                          <input
                            {...register("speed", { required: true })}
                            placeholder="Product price"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.speed}
                            readOnly
                          />
                          {errors.speed?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Speed price is required
                            </small>
                          )}
                        </div>
                        {/* Color */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product color
                          </small>
                          <input
                            {...register("color", { required: true })}
                            placeholder="Product price"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.color}
                            readOnly
                          />
                          {errors.color?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Color price is required
                            </small>
                          )}
                        </div>

                        {/* images */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Product picture
                          </small>
                          <input
                            {...register("images", { required: true })}
                            placeholder="Car images"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={singleData?.images}
                            readOnly
                          />
                          {errors.image?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Images is required
                            </small>
                          )}
                        </div>

                        {/* buyer information */}
                        <h1 className="mt-7 font-bold text-secondary">
                          Buyer information
                        </h1>

                        {/* name */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md text-center">
                            Buyer name
                          </small>
                          <input
                            {...register("name", { required: true })}
                            placeholder="Your name"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={user?.displayName}
                            readOnly
                          />
                          {errors.name?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Name is required
                            </small>
                          )}
                        </div>
                        {/* email */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Buyer email
                          </small>
                          <input
                            {...register("email", { required: true })}
                            placeholder="Your email"
                            type="email"
                            className="input input-bordered input-secondary w-full"
                            defaultValue={user?.email}
                            readOnly
                          />
                          {errors.email?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Email is required
                            </small>
                          )}
                        </div>
                        {/* phone */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Buyer phone
                          </small>
                          <input
                            {...register("phone", { required: true })}
                            placeholder="Your phone"
                            type="number"
                            className="input input-bordered input-secondary w-full"
                          />
                          {errors.phone?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Phone number is required
                            </small>
                          )}
                        </div>

                        {/* Address */}
                        <div className="my-4">
                          <small className="font-bold text-secondary text-md">
                            Meeting location
                          </small>
                          <input
                            {...register("address", { required: true })}
                            placeholder="Meeting location"
                            type="text"
                            className="input input-bordered input-secondary w-full"
                          />
                          {errors.address?.type === "required" && (
                            <small role="alert" className="text-red-600">
                              Meeting location is required
                            </small>
                          )}
                        </div>

                        <input
                          type="submit"
                          value="Booking confirm"
                          className="btn btn-secondary w-full"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <label htmlFor="applyActionModal" className="btn btn-secondary">
              Booked now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSingleDetails;
