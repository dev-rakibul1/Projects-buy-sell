import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopBanner from "../shared/topbanner/TopBanner";

const BookingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const handleBookingForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <TopBanner>Please booking now</TopBanner>
      <div className="md:w-[35%] mx-auto border border-gray-300 p-7 my-16">
        <h3 className="font-bold">Booking form</h3>
        <form onSubmit={handleSubmit(handleBookingForm)}>
          {/* name */}
          <div className="my-4">
            <input
              {...register("name", { required: true })}
              placeholder="Your name"
              type="text"
              className="input input-bordered input-secondary w-full"
            />
            {errors.name?.type === "required" && (
              <small role="alert" className="text-red-600">
                Name is required
              </small>
            )}
          </div>
          {/* email */}
          <div className="my-4">
            <input
              {...register("email", { required: true })}
              placeholder="Your email"
              type="email"
              className="input input-bordered input-secondary w-full"
            />
            {errors.email?.type === "required" && (
              <small role="alert" className="text-red-600">
                Email is required
              </small>
            )}
          </div>
          {/* products */}
          <div className="my-4">
            <input
              {...register("productName", { required: true })}
              placeholder="Product name"
              type="text"
              className="input input-bordered input-secondary w-full"
            />
            {errors.productName?.type === "required" && (
              <small role="alert" className="text-red-600">
                Product name is required
              </small>
            )}
          </div>
          {/* price */}
          <div className="my-4">
            <input
              {...register("price", { required: true })}
              placeholder="Product price"
              type="text"
              className="input input-bordered input-secondary w-full"
            />
            {errors.price?.type === "required" && (
              <small role="alert" className="text-red-600">
                Product price is required
              </small>
            )}
          </div>
          {/* phone */}
          <div className="my-4">
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
          {/* Buyer name */}
          {/* <div className="my-4">
            <input
              {...register("buyerName", { required: true })}
              placeholder="Buyer name"
              type="text"
              className="input input-bordered input-secondary w-full"
            />
            {errors.buyerName?.type === "required" && (
              <small role="alert" className="text-red-600">
                Buyer name is required
              </small>
            )}
          </div> */}
          {/* Address */}
          <div className="my-4">
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
  );
};

export default BookingForm;
