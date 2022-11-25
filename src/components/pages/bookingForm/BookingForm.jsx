import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import TopBanner from "../shared/topbanner/TopBanner";
import { AuthContext } from "./../../context/ContextProvider";

const BookingForm = () => {
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
      address: data?.address,
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
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
              // defaultValue={resalePrice}
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
