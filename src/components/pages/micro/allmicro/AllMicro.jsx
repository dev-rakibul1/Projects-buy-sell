import React from "react";
import { toast } from "react-hot-toast";
import { FaHandHoldingMedical, FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import TopBanner from "../../shared/topbanner/TopBanner";

const AllMicro = () => {
  const allmicro = useLoaderData();
  console.log(allmicro);

  const handleUserWishlist = (data) => {
    console.log(data);

    const carSingleDetails = {
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
    };

    fetch("http://localhost:5000/user-wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carSingleDetails),
    })
      .then((res) => res.json())
      .then((data) => {
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
      <section>
        <TopBanner>Most popular microbus</TopBanner>
      </section>

      <section className="py-16">
        <div className="md:w-[90%] mx-auto px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allmicro.map((car) => (
            <div
              className="card card-compact w-fll bg-base-100 shadow-xl"
              key={car._id}
            >
              <figure>
                <img src={car.images} alt="microbus" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary font-normal text-4xl car-font">
                  {car.title}
                </h2>

                {/*  Wish list report*/}
                <div className="text-center flex justify-center items-center">
                  <button
                    className="m-4 font-bold flex items-center justify-center text-md"
                    onClick={() => handleUserWishlist(car)}
                  >
                    Wishlist <FaRegHeart className="ml-2" />
                  </button>
                  <button
                    className="m-4 font-bold flex items-center justify-center text-md"
                    onClick={() => handleUserReport(car)}
                  >
                    report <FaHandHoldingMedical className="ml-2" />{" "}
                  </button>
                </div>
                <div className="md:flex justify-between">
                  <div>
                    <p>
                      <strong>Original price </strong>
                      {car.originalPrice}$
                    </p>
                    <p>
                      <strong>Resale price </strong>
                      {car.resalePrice}$
                    </p>
                    <p>
                      <strong>Use car </strong>
                      {car.yearsOfUse} years
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Model </strong>
                      {car.model}
                    </p>
                    <p>
                      <strong>Speed </strong>
                      {car.speed}
                    </p>
                    <p>
                      <strong>Color </strong>
                      {car.color}
                    </p>
                  </div>
                </div>
                <p>
                  <strong>Location</strong> {car.location}
                </p>
                <p>{car.description.substring(0, 150)}...</p>
                <div className="card-actions justify-end w-full mt-7">
                  <Link
                    className="w-full"
                    to={`/detailsSingleMicro/${car._id}`}
                  >
                    <button className="btn btn-secondary w-full">
                      See details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllMicro;
