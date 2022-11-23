import React from "react";
import Hero from "./hero/Hero";
const heroImages = "https://i.ibb.co/0smJFsf/bannar.jpg";

const Home = () => {
  return (
    <div className="">
      <section
        className="px-2  bg-opacity-60 bg-black banner-hero"
        style={{ backgroundImage: `url(${heroImages})` }}
      >
        <div className="md:w-[90%] mx-auto px-2">
          <Hero />
        </div>
      </section>
    </div>
  );
};

export default Home;
