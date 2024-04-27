import React from "react";
import ProductCard from "../../components/Cards/ProductCard";

function FeaturedProducts() {
  return (
    <div className="font-montserrat">
      {/* Title */}
      <div className="pt-20 flex flex-col justify-center items-center">
        <h4 className="font-medium text-xl leading-5 tracking-[0.2px] text-secondTextColor">
          Featured Products
        </h4>
        <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-headerColor my-3">
          BESTSELLER PRODUCTS
        </h3>
        <p className="tracking-[0.2px] leading-5 font-normal text-secondTextColor">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Card Container */}
      <div className="px-10 pb-10 flex justify-center items-center flex-wrap">
        {/* Product Card */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default FeaturedProducts;
