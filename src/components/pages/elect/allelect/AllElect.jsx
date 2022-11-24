import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import TopBanner from "../../shared/topbanner/TopBanner";

const AllElect = () => {
  const allelect = useLoaderData();
  return (
    <div>
      <section>
        <TopBanner>Most popular electronics car</TopBanner>
      </section>

      <section className="py-16">
        <div className="md:w-[90%] mx-auto px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allelect.map((car) => (
            <div
              className="card card-compact w-fll bg-base-100 shadow-xl"
              key={car._id}
            >
              <figure>
                <img src={car.images} alt="microbus" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary font-bold">
                  {car.title}
                </h2>
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
                    to={`/detailsSingleElect/${car._id}`}
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

export default AllElect;
