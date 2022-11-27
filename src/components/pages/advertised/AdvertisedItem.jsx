import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { FaMedapps, FaTimes } from "react-icons/fa";

const AdvertisedItem = () => {
  const { data: advertise, refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertisement = (data) => {
    console.log(data._id);

    fetch(`http://localhost:5000/advertise/${data._id}`, {
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
      {advertise?.length ? (
        <>
          <h1 className="text-center my-7 text-2xl font-semibold text-secondary">
            Seller products advertisement board
          </h1>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Picture</th>
                  <th>Title</th>
                  <th>Seller name</th>
                  <th>Seller status</th>
                  <th>Location</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {advertise?.map((ele, index) => (
                  <tr key={ele._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={ele.images} />
                        </div>
                      </div>
                    </th>
                    <th>{ele?.title}</th>
                    <th>{ele?.sellerName}</th>
                    <th>
                      {ele?.sellerStatus ? ele?.sellerStatus : "Not verified"}
                    </th>
                    <td>{ele?.location}</td>

                    <td>
                      <button
                        className="bg-secondary text-white py-3 px-3 rounded-md"
                        onClick={() => handleAdvertisement(ele)}
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

export default AdvertisedItem;
