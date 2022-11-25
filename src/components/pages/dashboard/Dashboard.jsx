import React, { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import { AuthContext } from "./../../context/ContextProvider";

const Dashboard = () => {
  const { userInfo, user, userLogOut } = useContext(AuthContext);
  // const [userInfo, setUserInformation] = useState([]);

  const { email, role } = userInfo;
  console.log(email, role);

  const handleUserLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log("User information", setUserInformation(data)))
  //     .catch((error) => console.log(error));
  // }, [user?.email]);

  return (
    <div className="flex md:w-[50%] mx-auto flex-col items-center mt-7">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-secondary text-xl font-semibold">
          Welcome from dashboard
        </h2>
        <h3>Name: {user?.displayName}</h3>
        <h3>Email: {user?.email}</h3>
        {userInfo.role === "seller" ? (
          <h3>Administrator: Seller</h3>
        ) : undefined}
        {userInfo.role === "admin" ? <h3>Administrator: Admin</h3> : undefined}
        {!userInfo.role ? <h3>Administrator: Buyer</h3> : undefined}
      </div>

      <button
        className="btn-secondary py-2 font-semibold rounded-md px-7 mt-2 flex"
        onClick={userLogOut}
      >
        <FaPowerOff className="mr-3 text-xl" /> <span>Log out</span>
      </button>
    </div>
  );
};

export default Dashboard;
