import React, { useContext } from "react";
import { AuthContext } from "./../../context/ContextProvider";

const Dashboard = () => {
  const { userLogOut } = useContext(AuthContext);

  const handleUserLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button className="btn btn-secondary" onClick={userLogOut}>
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
