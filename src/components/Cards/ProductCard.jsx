import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, imgClass, includesColor = true }) {
  return (
    <>
      <Link to="/product/imgClass" key={product?.id}>
        <div
          className={`justify-center items-center md:mr-6 mt-10  shadow-sm bg-white pb-4 ${
            includesColor ? "text-center" : "text-left"
          }`}
        >
          <img
            src={product?.images[0].url}
            className={`${imgClass} m-auto sm:w-[480px] hover:scale-105 transition ease-in duration-300 md:w-[520px] lg:w-[360px] object-cover`}
          />

          <h5
            className={`font-bold leading-6 tracking-[0.1px]  text-headerColor mt-4 ${
              !includesColor && "ml-6"
            }`}
          >
            {product?.name}
          </h5>
          <h5
            className={`font-bold leading-6 tracking-[0.2px]  text-secondTextColor mt-3 ${
              !includesColor && "ml-6"
            }`}
          >
            Mağaza ID: {product?.store_id}
          </h5>

          {/* Price */}
          <div
            className={`flex items-center mt-3 ${
              includesColor ? "justify-center" : "ml-6"
            }`}
          >
            <h5 className="font-bold leading-6 tracking-[0.1px]  text-secondary ">
              {product?.price}₺
            </h5>
            <h5 className="font-medium leading-6 tracking-[0.1px]  text-muted ml-1">
              ({product?.rating})
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
    </>
  );
}

export default ProductCard;
