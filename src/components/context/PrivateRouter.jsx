import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./../typography/spinner/Spinner";
import { AuthContext } from "./ContextProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user?.email && user?.uid) {
    return children;
  }
  if (loading) {
    return <Spinner />;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
