import React from "react";

function Card({ className, title, containerClass }) {
  return (
    <div className={`${className} bg-no-repeat bg-cover bg-center relative`}>
      <div
        className={`${containerClass} justify-center items-center flex bg-white absolute bottom-5 left-5 shadow-md`}
      >
        <h2 className="font-bold leading-4 tracking-[0.1px] text-lg text-headerColor text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Card;
