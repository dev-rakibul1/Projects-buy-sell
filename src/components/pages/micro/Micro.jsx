import React from "react";

const Micro = ({ car }) => {
  const {
    title,
    images,
    yearsOfUse,
    model,
    speed,
    resalePrice,
    description,
    color,
  } = car;
  return (
    <div>
      <div className="card card-compact w-full h-full border border-gray-200 rounded-md">
        <figure>
          <img src={images} alt="car" className="max-w-60 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-normal text-xl text-secondary car-font">
            {title}
          </h2>
          <div>
            <small className="block font-semibold text-sm">
              Model: {model}
            </small>
            <small className="block font-semibold text-sm">
              Speed: {speed}
            </small>
            <small className="block font-semibold text-sm">
              Color: {color}
            </small>
          </div>
          <p>{description.substring(0, 50)} [...]</p>
        </div>
      </div>
    </div>
  );
};

export default Micro;
