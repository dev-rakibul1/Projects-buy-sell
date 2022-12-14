import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../hook/useTitle/useTitle";
import Micro from "../micro/Micro";
import TopBanner from "../shared/topbanner/TopBanner";
import Car from "./../car/Car";
import Elect from "./../elect/Elect";
const heroImages = "https://i.ibb.co/0smJFsf/bannar.jpg";
const overViewBanner = "https://i.ibb.co/W2YQ536/reviews-car.jpg";
const car1 = "https://i.ibb.co/Hn77h5R/car3.jpg";
const car2 = "https://i.ibb.co/1vrdhZ6/car4.jpg";
const car3 = "https://i.ibb.co/mzWnxWp/car2.jpg";

const Shop = () => {
  UseTitle("Home");
  const [someCars, setSomeCars] = useState([]);
  const [micro, setMicro] = useState([]);
  const [elect, setElect] = useState([]);

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
    <div>
      <TopBanner>
        <h1>Catagories products display and enjoy shop</h1>
      </TopBanner>
      {/* micro */}
      <section className="px-2 mt-16">
        <div className="md:w-[90%] mx-auto px-2">
          <div className="md:flex">
            <div className="md:w-[30%] px-2">
              <img src={car2} alt="" className="rounded-xl" />
            </div>
            <div className="md:w-[70%] px-2">
              <div className="md:flex justify-between items-center py-7">
                <span className="text-2xl font-normal">
                  Most popular microbus{" "}
                </span>
                <Link to={`/allMicro/:id`}>
                  {" "}
                  <button className="font-semibold">See All</button>
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
              <div className="md:flex justify-between items-center py-7">
                <span className="text-2xl font-normal">
                  Most popular electronics car
                </span>
                <Link to={`/allElect/:id`}>
                  {" "}
                  <button className="font-semibold">See All</button>
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
              <div className="md:flex justify-between items-center py-7">
                <span className="text-2xl font-normal">Most popular car</span>
                <Link to={`/allCar/:id`}>
                  {" "}
                  <button className="font-semibold">See All</button>
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
    </div>
  );
};

export default Shop;
