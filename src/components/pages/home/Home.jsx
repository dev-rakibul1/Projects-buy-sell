import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Micro from "../micro/Micro";
import UseTitle from "./../../hook/useTitle/useTitle";
import Car from "./../car/Car";
import Elect from "./../elect/Elect";
import OverViewCar from "./../overview/OverViewCar";
import Hero from "./hero/Hero";
const heroImages = "https://i.ibb.co/0smJFsf/bannar.jpg";
const overViewBanner = "https://i.ibb.co/W2YQ536/reviews-car.jpg";
const car1 = "https://i.ibb.co/Hn77h5R/car3.jpg";
const car2 = "https://i.ibb.co/1vrdhZ6/car4.jpg";
const car3 = "https://i.ibb.co/mzWnxWp/car2.jpg";

const Home = () => {
  UseTitle("Home");
  const [someCars, setSomeCars] = useState([]);
  const [micro, setMicro] = useState([]);
  const [elect, setElect] = useState([]);

  // const { data: car, isLoading } = useQuery({
  //   queryKey: ["car"],
  //   queryFn: async () => {
  //     const res = await fetch(" https://buy-sell-car-store-server.vercel.app/car-something");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   return <Spinner />;
  // }

  useEffect(() => {
    fetch(" https://buy-sell-car-store-server.vercel.app/car-something")
      .then((res) => res.json())
      .then((data) => setSomeCars(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(" https://buy-sell-car-store-server.vercel.app/micro-something")
      .then((res) => res.json())
      .then((data) => setMicro(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(" https://buy-sell-car-store-server.vercel.app/elect-something")
      .then((res) => res.json())
      .then((data) => setElect(data))
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

      {/* micro */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car2} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7 mb-10">
                <span className="text-2xl font-normal">
                  Most popular microbus{" "}
                </span>
                <Link to={`/allMicro/:id`}>
                  {" "}
                  <button className="font-semibold flex items-center justify-center border border-gray-300 py-2 px-7  mt-7 md:mt-0">
                    See All <FaArrowRight className="ml-4" />{" "}
                  </button>
                </Link>
              </div>
              <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {micro.map((car) => (
                  <Micro key={car._id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* elect */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car3} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7 mb-10">
                <span className="text-2xl font-normal">
                  Most popular electronics car
                </span>
                <Link to={`/allElect/:id`}>
                  {" "}
                  <button className="font-semibold flex items-center justify-center border border-gray-300 py-2 px-7 mt-7 md:mt-0">
                    See All <FaArrowRight className="ml-4" />{" "}
                  </button>
                </Link>
              </div>
              <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {elect.map((car) => (
                  <Elect key={car._id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* car */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car1} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7 mb-10">
                <span className="text-2xl font-normal">Most popular car</span>
                <Link to={`/allCar/:id`}>
                  {" "}
                  <button className="font-semibold flex items-center justify-center border border-gray-300 py-2 px-7  mt-7 md:mt-0">
                    See All <FaArrowRight className="ml-4" />{" "}
                  </button>
                </Link>
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

      {/* Over view banner */}
      <section
        className="px-2 bg-no-repeat bg-center bg-cover my-16"
        style={{ backgroundImage: `url(${overViewBanner})` }}
      >
        <div className="md:w-[90%] mx-auto px-2">
          <OverViewCar />
        </div>
      </section>
    </div>
  );
};

export default Home;
