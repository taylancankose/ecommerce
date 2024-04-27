import React from "react";
import ProductCard from "../../components/Cards/ProductCard";

function BestSellerProducts() {
  return (
    <div className="mt-10 py-10 bg-bgGray">
      <div className="md:mx-32 mx-8">
        <div>
          <h3 className="mb-6 text-headerColor font-bold text-2xl">
            BESTSELLER PRODUCTS
          </h3>
          <div className="border border-lightGray border-1 mt-4" />
        </div>
        <div className="flex items-center justify-center md:justify-between flex-wrap pb-6">
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
          <ProductCard includesColor={false} imgClass={"h-82"} />
        </div>
      </div>
    </div>
  );
}

export default BestSellerProducts;
