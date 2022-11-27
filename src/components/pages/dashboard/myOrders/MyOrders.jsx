import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaMedapps, FaTimes } from "react-icons/fa";
import Spinner from "../../../typography/spinner/Spinner";

const MyOrders = () => {
  const {
    data: myOrders,
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

  const handleUserProductRemove = (order) => {
    fetch(`http://localhost:5000/user-booking-information/${order._id}`, {
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
      {myOrders.length ? (
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
                  <th>Gmail</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((myOrder, index) => (
                  <tr key={myOrder._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                          <img src={myOrder?.images} />
                        </div>
                      </div>
                    </th>
                    <th>{myOrder?.email}</th>
                    <td>{myOrder?.productName}</td>
                    <td>{myOrder?.price}</td>
                    <td>
                      <button className="bg-secondary text-white py-1 px-4 rounded-md">
                        Pay
                      </button>
                    </td>
                    <td>
                      <button
                        className="bg-secondary text-white py-3 px-3 rounded-md"
                        onClick={() => handleUserProductRemove(myOrder)}
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
          <span>You no order place.</span>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
