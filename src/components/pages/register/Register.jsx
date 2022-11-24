import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/ContextProvider";
import UseTitle from "./../../hook/useTitle/useTitle";
import TopBanner from "./../shared/topbanner/TopBanner";

const Register = () => {
  UseTitle("Register");
  const {
    user,
    userEmailAndPasswordRegister,
    updateUserProfile,
    googlePopupSign,
  } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  // user info collection from form
  const handleBookingForm = (data) => {
    console.log(data);
    handleUserEmailPassRegister(data);
  };

  // user register system
  const handleUserEmailPassRegister = (data) => {
    // user info
    const email = data.email;
    const password = data.password;

    // user resister email password
    userEmailAndPasswordRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

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
              console.log("user verify check", data?.emailVerified);

              // user info for server
              const userInfoForServer = {
                name: data?.name,
                email: data?.email,
                image: serverImages,
              };
            }

            // update user profile
            const registerUserInfo = {
              displayName: data.name,
              photoURL: imgData?.data?.url && imgData?.data?.url,
            };
            updateUserProfile(registerUserInfo)
              .then(() => {})
              .catch((error) => console.log(error));
            setError("");
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });

        // user toaster alert
        toast.success("Register successfully");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    toast(error);
  };

  // handle google popup sign
  const handleGooglePopupLogin = () => {
    googlePopupSign()
      .then((data) => {
        toast.success("Register successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <TopBanner>Please register now</TopBanner>
      <div className="md:w-[35%] mx-auto border border-gray-300 p-7 my-16">
        <h3 className="font-bold">Register now</h3>
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

          {/* images */}
          <div className="my-4">
            <input
              {...register("password", { required: true })}
              placeholder="***********"
              type="password"
              className="input input-bordered input-secondary w-full"
            />
            {errors.password?.type === "required" && (
              <small role="alert" className="text-red-600">
                Password is required
              </small>
            )}
          </div>

          <input
            type="submit"
            value="Register now"
            className="btn btn-secondary w-full"
          />

          <div className="text-center py-2">
            <p>
              Already have an account?{" "}
              <Link className="text-secondary font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>

        <div>
          <div className="flex flex-col w-full">
            <div className="divider py-4">OR</div>
          </div>
          <button
            className="btn btn-outline btn-secondary w-full"
            onClick={handleGooglePopupLogin}
          >
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
