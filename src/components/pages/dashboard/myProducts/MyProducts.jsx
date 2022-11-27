import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaMedapps, FaTimes } from "react-icons/fa";
import UseTitle from "./../../../hook/useTitle/useTitle";

const MyProducts = () => {
  UseTitle("My products");
  const [micro, setMicroData] = useState(null);
  const [luxuriousCar, setLuxuriousCar] = useState(null);

  // electronic catagories products loaded
  const { data: allElectronic, refetch } = useQuery({
    queryKey: ["allElectronic"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-elect");
      const data = res.json();
      return data;
    },
  });
  const elect = allElectronic?.slice(6);

  // microbus catagories products loaded
  // const { data: allMicrobus } = useQuery({
  //   queryKey: ["allMicrobus"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/all-micro");
  //     const data = res.json();
  //     return data;
  //   },
  // });
  // const micro = allMicrobus?.slice(6);
  // setMicroData(micro);
  console.log(micro);

  // microbus catagories products loaded
  useEffect(() => {
    axios.get("http://localhost:5000/all-micro").then((res) => {
      setMicroData(res.data?.slice(6));
    });
  }, []);

  //  luxurious catagories products loaded
  useEffect(() => {
    axios.get("http://localhost:5000/all-car").then((res) => {
      setLuxuriousCar(res.data?.slice(6));
    });
  }, []);

  // handle electronic catagories products
  const handleAllElect = (ele) => {
    console.log(ele._id);

    fetch(`http://localhost:5000/all-elect/${ele._id}`, {
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

  // handle microbus catagories products
  const handleAllMicro = (ele) => {
    console.log(ele._id);

    fetch(`http://localhost:5000/all-micro/${ele._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          const remainingData = micro.filter((mic) => mic._id !== ele._id);
          setMicroData(remainingData);
        } else {
          toast.error(data.error);
        }
        refetch();
      })
      .catch((error) => console.log(error));
  };

  // handle luxurious catagories products
  const handleAllLuxuriousCar = (ele) => {
    console.log(ele._id);

    fetch(`http://localhost:5000/all-car/${ele._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          const remainingData = luxuriousCar.filter(
            (mic) => mic._id !== ele._id
          );
          setLuxuriousCar(remainingData);
        } else {
          toast.error(data.error);
        }
        refetch();
      })
      .catch((error) => console.log(error));
  };

  // handle advertisement
  const handleAdvertise = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/advertise", {
        title: data?.title,
        images: data?.images,
        model: data?.model,
        originalPrice: data?.originalPrice,
        resalePrice: data?.resalePrice,
        postDate: data?.postDate,
        sellerName: data?.sellerName,
        sellerStatus: data?.sellerStatus,
        speed: data?.speed,
        weight: data?.weight,
        yearsOfUse: data?.yearsOfUse,
        location: data?.location,
        description: data?.description,
      })
      .then((data) => {
        if (data?.data?.success) {
          toast.success(data?.data?.message);
        } else {
          toast.error(data?.data?.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* my all electronic catagories products */}
      <div>
        <h1 className="text-center my-7 text-2xl font-semibold text-secondary">
          My products dashboard
        </h1>
        {elect?.length ? (
          <>
            <h3 className="py-4 px-2 uppercase font-bold text-gray-600">
              Electronic catagories
            </h3>
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
                    <th>Advertise</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {elect?.map((ele, index) => (
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
                          onClick={() => handleAdvertise(ele)}
                        >
                          Advertise
                        </button>
                      </td>

                      <td>
                        <button
                          className="bg-secondary text-white py-3 px-3 rounded-md"
                          onClick={() => handleAllElect(ele)}
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
          <div className="text-2xl text-gray-400 text-center mt-7 flex items-center justify-center h-full flex-col mb-16">
            <p>
              <FaMedapps className="text-9xl my-16" />
            </p>
            <span>Electronic catagories data not available.</span>
          </div>
        )}
      </div>

      {/* my all electronic catagories products */}
      <div className="mt-10">
        {micro?.length ? (
          <>
            <h3 className="py-4 px-2 uppercase font-bold text-gray-600">
              Microbus catagories
            </h3>
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
                    <th>Advertise</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {micro?.map((ele, index) => (
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
                          onClick={() => handleAdvertise(ele)}
                        >
                          Advertise
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-secondary text-white py-3 px-3 rounded-md"
                          onClick={() => handleAllMicro(ele)}
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
          <div className="text-2xl text-gray-400 text-center mt-7 flex items-center justify-center h-full flex-col mb-16">
            <p>
              <FaMedapps className="text-9xl my-16" />
            </p>
            <span>Microbus catagories data not available.</span>
          </div>
        )}
      </div>

      {/* my all luxurious catagories products */}
      <div className="mt-10">
        {luxuriousCar?.length ? (
          <>
            <h3 className="py-4 px-2 uppercase font-bold text-gray-600">
              Luxurious car catagories
            </h3>
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
                    <th>Advertise</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {luxuriousCar?.map((ele, index) => (
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
                          onClick={() => handleAdvertise(ele)}
                        >
                          Advertise
                        </button>
                      </td>
                      <td>
                        <button
                          className="bg-secondary text-white py-3 px-3 rounded-md"
                          onClick={() => handleAllLuxuriousCar(ele)}
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
          <div className="text-2xl text-gray-400 text-center mt-7 flex items-center justify-center h-full flex-col mb-16">
            <p>
              <FaMedapps className="text-9xl my-16" />
            </p>
            <span>Luxurious catagories data not available.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProducts;
