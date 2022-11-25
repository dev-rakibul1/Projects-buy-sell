import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import TopBanner from "../shared/topbanner/TopBanner";
import { AuthContext } from "./../../context/ContextProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const productData = useLoaderData();
  console.log(productData);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  const handleBookingForm = (data) => {
    console.log(data);

    // user images
    const imagesHostKey = process.env.REACT_APP_IMAGES_HOST_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${imagesHostKey}`;

    const imagesFormData = new FormData();
    const images = data.image[0];
    imagesFormData.append("image", images);

    fetch(url, {
      method: "POST",
      body: imagesFormData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          const serverImages = imgData?.data?.url;

          const newProductInfo = {
            title: data?.title,
            model: data?.model,
            color: data?.colors,
            speed: data?.speed,
            originalPrice: data?.price,
            resalePrice: data?.resalePrice,
            weight: data?.weight,
            sellerPhone: data?.phone,
            sellerName: data?.sellerName,
            location: data?.address,
            catagories: data?.catagories,
            images: serverImages,
            description: data?.textarea,
          };
          console.log(newProductInfo);

          // ===================CAR INFORMATION DIVIDED BY CATAGORIES======================
          // -------------electronic car data-------------------
          if (newProductInfo.catagories === "electronicCar") {
            //   user for post method
            fetch("http://localhost:5000/all-elect", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newProductInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  toast.success("data send success");
                }
              })
              .then((error) => console.log(error));
          }

          // -------------electronic car data-------------------
          if (newProductInfo.catagories === "luxuriousCar") {
            //   user for post method
            fetch("http://localhost:5000/all-car", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newProductInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  toast.success("data send success");
                }
              })
              .then((error) => console.log(error));
          }

          // -------------Microbus car data-------------------
          if (newProductInfo.catagories === "microbus") {
            //   user for post method
            fetch("http://localhost:5000/all-micro", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newProductInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  toast.success("data send success");
                }
              })
              .then((error) => console.log(error));
          }
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <TopBanner>Add a now product for your sell</TopBanner>
      <div className="md:w-[75%] mx-auto border border-gray-300 p-7 my-16">
        <h3 className="font-bold">Add new products</h3>
        <form onSubmit={handleSubmit(handleBookingForm)}>
          <div className="grid grid-cols-2 gap-6">
            {/* name */}
            <div className="my-4">
              <input
                {...register("title", { required: true })}
                placeholder="Products name"
                type="text"
                className="input input-bordered input-secondary w-full"
              />
              {errors.title?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Product name is required
                </small>
              )}
            </div>
            {/* model */}
            <div className="my-4">
              <input
                {...register("model", { required: true })}
                placeholder="Car model"
                type="text"
                className="input input-bordered input-secondary w-full"
              />
              {errors.model?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Products model is required
                </small>
              )}
            </div>
            {/* Colors */}
            <div className="my-4">
              <input
                {...register("colors", { required: true })}
                placeholder="Car colors"
                type="text"
                className="input input-bordered input-secondary w-full"
              />
              {errors.colors?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Products colors is required
                </small>
              )}
            </div>
            {/* speed */}
            <div className="my-4">
              <input
                {...register("speed", { required: true })}
                placeholder="speed"
                type="text"
                className="input input-bordered input-secondary w-full"
              />
              {errors.speed?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Car speed is required
                </small>
              )}
            </div>
            {/* price */}
            <div className="my-4">
              <input
                {...register("price", { required: true })}
                placeholder="Product original price"
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
            {/* resalePrice */}
            <div className="my-4">
              <input
                {...register("resalePrice", { required: true })}
                placeholder="Resale price"
                type="text"
                className="input input-bordered input-secondary w-full"
                // defaultValue={resalePrice}
              />
              {errors.resalePrice?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Product resale price is required
                </small>
              )}
            </div>
            {/* weight */}
            <div className="my-4">
              <input
                {...register("weight", { required: true })}
                placeholder="Car weight"
                type="text"
                className="input input-bordered input-secondary w-full"
                // defaultValue={resalePrice}
              />
              {errors.weight?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Product weight is required
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
            {/* seller name */}
            <div className="my-4">
              <input
                {...register("sellerName", { required: true })}
                placeholder="seller name"
                type="text"
                className="input input-bordered input-secondary w-full"
              />
              {errors.sellerName?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Seller name is required
                </small>
              )}
            </div>
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

            {/* optional */}
            <div className="my-4">
              <select
                {...register("catagories", { required: true })}
                className="select select-secondary w-full"
              >
                <option>Select your catagories</option>
                <option value="luxuriousCar" selected>
                  Luxurious car
                </option>
                <option value="electronicCar">Electronic car</option>
                <option value="microbus">Microbus</option>
              </select>

              {errors.catagories?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Catagories is required
                </small>
              )}
            </div>

            {/* images */}
            <div className="my-4">
              <input
                {...register("image", { required: true })}
                placeholder="Meeting location"
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full"
              />
              {errors.image?.type === "required" && (
                <small role="alert" className="text-red-600">
                  Images is required
                </small>
              )}
            </div>
          </div>

          {/* Text area */}
          <div className="my-4">
            <textarea
              {...register("textarea", { required: true })}
              placeholder="Products description"
              type="textarea"
              className="textarea textarea-secondary w-full"
              cols="20"
              rows="5"
            />

            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}

            {errors.textarea?.type === "required" && (
              <small role="alert" className="text-red-600">
                Your products description is required
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

export default AddProducts;
