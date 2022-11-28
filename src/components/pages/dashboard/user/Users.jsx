import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import { AuthContext } from "./../../../context/ContextProvider";
import UseTitle from "./../../../hook/useTitle/useTitle";
import Spinner from "./../../../typography/spinner/Spinner";

const Users = () => {
  const { userInfo } = useContext(AuthContext);
  UseTitle("user");

  const [getUser, setGetUser] = useState("");

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myOrder"],
    queryFn: async () => {
      const res = await fetch(
        " https://buy-sell-car-store-server.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleUser = (user) => {
    fetch(` https://buy-sell-car-store-server.vercel.app/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
        refetch();
      })
      .catch((error) => console.log(error));
  };

  // handle user verified
  const handleUserVerification = (id) => {
    console.log(id);

    fetch(` https://buy-sell-car-store-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("users", data?.data);
        setGetUser(data?.data);

        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {users.length ? (
        <>
          <h1 className="text-center my-7 text-2xl font-semibold text-secondary">
            user/Admin, seller and buyer details
          </h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>User</th>
                  <th>Name</th>
                  <th>Gmail</th>
                  <th>Administrator role</th>
                  <th>User status</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                          <img src={user?.image} />
                        </div>
                      </div>
                    </th>
                    <th>{user?.name}</th>
                    <th>{user?.email}</th>
                    <td>{user?.role}</td>
                    <td>
                      {user?.sellerStatus ? (
                        user?.sellerStatus
                      ) : (
                        <>
                          <button
                            className="bg-secondary text-white py-3 px-3 rounded-md"
                            onClick={() => handleUserVerification(user._id)}
                          >
                            Not verify
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        className="bg-secondary text-white py-3 px-3 rounded-md"
                        onClick={() => handleUser(user)}
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-2xl text-gray-400 text-center mt-7">
          No user found
        </h1>
      )}
    </div>
  );
};

export default Users;
