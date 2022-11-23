import React, { useEffect, useState } from "react";
import Micro from "../micro/Micro";
import Car from "./../car/Car";
import Hero from "./hero/Hero";
const heroImages = "https://i.ibb.co/0smJFsf/bannar.jpg";
const car1 = "https://i.ibb.co/Hn77h5R/car3.jpg";
const car2 = "https://i.ibb.co/1vrdhZ6/car4.jpg";
const car3 = "https://i.ibb.co/mzWnxWp/car2.jpg";

const Home = () => {
  const [someCars, setSomeCars] = useState([]);

  // const { data: car, isLoading } = useQuery({
  //   queryKey: ["car"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/car-something");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   return <Spinner />;
  // }

  useEffect(() => {
    fetch("http://localhost:5000/car-something")
      .then((res) => res.json())
      .then((data) => setSomeCars(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      {/* hero banner */}
      <section
        className="px-2  bg-opacity-60 bg-black banner-hero"
        style={{ backgroundImage: `url(${heroImages})` }}
      >
        <div className="md:w-[90%] mx-auto px-2">
          <Hero />
        </div>
      </section>

      {/* car */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car2} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7">
                <span className="text-2xl font-bold">Most popular car</span>
                <button className="font-semibold">See All</button>
              </div>
              <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {someCars.map((car) => (
                  <Car key={car._id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* micro */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car2} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7">
                <span className="text-2xl font-bold">Most popular car</span>
                <button className="font-semibold">See All</button>
              </div>
              <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {someCars.map((car) => (
                  <Micro key={car._id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
