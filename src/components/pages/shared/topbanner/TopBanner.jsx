import React from "react";

const TopBanner = ({ children }) => {
  return (
    <div
      className="hero bg-cover bg-center bg-no-repeat py-32 top-banner"
      style={{
        backgroundImage: `url("https://i.ibb.co/zSvcrt0/sevice-car.jpg")`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl font-bold hero-title">{children}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
