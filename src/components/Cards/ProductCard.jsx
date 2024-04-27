import React from "react";
import product from "../../assets/product.png";
import { Link } from "react-router-dom";

function ProductCard({ imgClass, includesColor = true }) {
  return (
    <Link to="/product/imgClass">
      <div
        className={`justify-center items-center md:mr-6  mt-10 hover:scale-105 transition ease-in duration-500 shadow-sm bg-white pb-4 ${
          includesColor ? "text-center" : "text-left"
        }`}
      >
        <img
          src={product}
          className={`${imgClass} m-auto sm:w-[480px] md:w-[640px] lg:w-full`}
        />

        <h5
          className={`font-bold leading-6 tracking-[0.1px]  text-headerColor mt-4 ${
            !includesColor && "ml-6"
          }`}
        >
          Graphic Design
        </h5>
        <h5
          className={`font-bold leading-6 tracking-[0.2px]  text-secondTextColor mt-3 ${
            !includesColor && "ml-6"
          }`}
        >
          English Department
        </h5>

        {/* Price */}
        <div
          className={`flex items-center mt-3 ${
            includesColor ? "justify-center" : "ml-6"
          }`}
        >
          <h5 className="font-bold leading-6 tracking-[0.1px]  text-muted mr-3">
            $16.48
          </h5>
          <h5 className="font-bold leading-6 tracking-[0.1px]  text-secondary ">
            $6.48
          </h5>
        </div>
        {/* Colors */}
        {includesColor && (
          <div className="flex items-center justify-center mt-3">
            <div className="h-4 w-4 rounded-lg mr-2 bg-primary" />
            <div className="h-4 w-4 rounded-lg mr-2 bg-secondary" />
            <div className="h-4 w-4 rounded-lg mr-2 bg-alert" />
            <div className="h-4 w-4 rounded-lg mr-2 bg-headerColor" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
