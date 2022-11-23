import React from "react";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div className="">
      <section className="px-2">
        <div className="md:w-[90%] mx-auto px-2">
          <Hero />
        </div>
      </section>
    </div>
  );
};

export default Home;
