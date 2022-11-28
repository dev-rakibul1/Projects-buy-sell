import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/ContextProvider";
import UseTitle from "./../../hook/useTitle/useTitle";
import TopBanner from "./../shared/topbanner/TopBanner";

const Login = () => {
  const { user, signInWithEmailPassword, googlePopupSign } =
    useContext(AuthContext);
  UseTitle("Login");

  // user navigate
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // react hook form handler
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");

  // user login information
  const handleBookingForm = (data) => {
    console.log(data);
    handleUserEmailPassLogin(data);
  };

  // user login with email and password
  const handleUserEmailPassLogin = (userInfo) => {
    // user email password
    const email = userInfo.email;
    const password = userInfo.password;

    signInWithEmailPassword(email, password)
      .then((data) => {
        console.log(data);
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // handle google popup login
  const handleGooglePopupLoginSystem = () => {
    googlePopupSign()
      .then((data) => {
        console.log(data);
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <TopBanner>Please login now</TopBanner>
      <div className="md:w-[35%] mx-auto border border-gray-300 p-7 my-16">
        <h3 className="font-bold">Login now</h3>
        <form onSubmit={handleSubmit(handleBookingForm)}>
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

          {/* password */}
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
            value="Login now"
            className="btn btn-secondary w-full"
          />

          <div className="text-center py-2">
            <p>
              Create a new account?{" "}
              <Link className="text-secondary font-bold" to="/register">
                Register
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
            onClick={handleGooglePopupLoginSystem}
          >
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
