import React from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { useSelector } from "react-redux";

function BestSellerProducts() {
  const products = useSelector((state) => state.productReducer.productList);
  return (
    <div className="mt-10 py-10 bg-bgGray ">
      <div className="mx-8 lg:mx-32">
        <div>
          <h3 className="mb-6 text-headerColor font-bold text-2xl">
            BESTSELLER PRODUCTS
          </h3>
          <div className="border border-lightGray border-1 mt-4" />
        </div>
        <div className="flex items-center justify-center lg:justify-between flex-wrap pb-6">
          {products
            .sort((a, b) => b.sell_count - a.sell_count)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                includesColor={false}
                imgClass={"h-82"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellerProducts;
