import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaMedapps, FaTimes } from "react-icons/fa";
import UseTitle from "./../../../hook/useTitle/useTitle";

const Wishlist = () => {
  UseTitle("wishlist");
  const {
    data: wishlist,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user-wishlist");
      const data = res.json();
      return data;
    },
  });

  // handle my wishlist
  const handleMyWishlist = (wish) => {
    fetch(`http://localhost:5000/user-wishlist/${wish._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
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

  return (
    <div>
      {wishlist?.length ? (
        <>
          <h1 className="text-center my-7 text-2xl font-semibold text-secondary">
            Your order details
          </h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Picture</th>
                  <th>Title</th>
                  <th>Model</th>
                  <th>Resale price</th>
                  <th>Seller status</th>
                  <th>Payment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((myWish, index) => (
                  <tr key={myWish._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={myWish?.images} alt="product" />
                        </div>
                      </div>
                    </th>
                    <th>{myWish?.title}</th>
                    <td>{myWish?.model}</td>
                    <td>{myWish?.resalePrice}$</td>
                    <td>
                      {myWish?.sellerStatus
                        ? myWish?.sellerStatus
                        : "Not verified"}
                    </td>
                    <td>
                      <button className="bg-secondary text-white py-1 px-4 rounded-md">
                        Pay
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-secondary text-white py-3 px-3 rounded-md"
                        onClick={() => handleMyWishlist(myWish)}
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
        <div className="text-2xl text-gray-400 text-center mt-7 flex items-center justify-center h-full flex-col">
          <p>
            <FaMedapps className="text-9xl my-16" />
          </p>
          <span>No product add yet on your wishlist.</span>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
