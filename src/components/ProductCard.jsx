import React from "react";
import product from "../assets/product.png";

function ProductCard({ imgClass }) {
  return (
    <div className="text-center justify-center items-center md:mr-6 mt-10">
      <img src={product} className={`${imgClass}`} />

      <h5 className="font-bold leading-6 tracking-[0.1px]  text-headerColor mt-4">
        Graphic Design
      </h5>
      <h5 className="font-bold leading-6 tracking-[0.2px]  text-secondTextColor mt-3">
        English Department
      </h5>

      {/* Price */}
      <div className="flex items-center mt-3 justify-center">
        <h5 className="font-bold leading-6 tracking-[0.1px]  text-muted mr-3">
          $16.48
        </h5>
        <h5 className="font-bold leading-6 tracking-[0.1px]  text-secondary ">
          $6.48
        </h5>
      </div>

      {/* Colors */}
      <div className="flex items-center justify-center mt-3">
        <div className="h-4 w-4 rounded-lg mr-2 bg-primary" />
        <div className="h-4 w-4 rounded-lg mr-2 bg-secondary" />
        <div className="h-4 w-4 rounded-lg mr-2 bg-alert" />
        <div className="h-4 w-4 rounded-lg mr-2 bg-headerColor" />
      </div>
    </div>
  );
}

export default ProductCard;
