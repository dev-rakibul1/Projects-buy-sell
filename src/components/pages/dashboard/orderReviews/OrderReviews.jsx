import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaTimes } from "react-icons/fa";
import Spinner from "./../../../typography/spinner/Spinner";

const OrderReviews = () => {
  const {
    data: orderReviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myOrder"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user-booking-information");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleOrderReviews = (info) => {
    console.log(info);

    fetch(`http://localhost:5000/user-booking-information/${info._id}`, {
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

  return (
    <div>
      {orderReviews.length ? (
        <>
          <h1 className="text-center my-7 text-2xl font-semibold text-secondary">
            Order reviews
          </h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Gmail</th>
                  <th>Products name</th>
                  <th>phone</th>
                  <th>address</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {orderReviews.map((order, index) => (
                  <tr key={order._id}>
                    <th>{index + 1}</th>
                    <th>{order?.name}</th>
                    <th>{order?.email}</th>
                    <td>{order?.productName}</td>
                    <td>{order?.phone}</td>
                    <td>{order?.address}</td>
                    <td>
                      <button
                        className="bg-secondary text-white py-3 px-3 rounded-md"
                        onClick={() => handleOrderReviews(order)}
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
          User products not added yet.
        </h1>
      )}
    </div>
  );
};

export default OrderReviews;
