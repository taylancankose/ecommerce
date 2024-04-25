import React from "react";
import { Link } from "react-router-dom/";
import ProductDetailsCard from "../layout/ProductDetailsCard";
import ProductDescription from "../layout/ProductDescription";
import BestSellerProducts from "../layout/BestSellerProducts";

function ProductDetailPage() {
  return (
    <div className="font-montserrat ">
      <div className="p-2 md:p-10 bg-bgGray">
        {/* Top Navigator */}
        <div className="flex mt-4 md:mt-0 items-center ml-24">
          <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-headerColor mr-2">
            Home
          </h2>
          <i className="fa-solid fa-chevron-right font-bold text-xs leading-6 tracking-[0.2px] text-muted mr-2"></i>
          <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-muted">
            Shop
          </h2>
        </div>
      </div>

      <div className="p-2 md:p-10  bg-bgGray">
        <ProductDetailsCard />
      </div>

      <div className="p-2 md:p-10">
        <div className="md:mx-24 mx-4">
          <div className="flex flex-wrap items-center justify-center md:gap-12">
            <Link className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] mr-4 md:mr-0">
              Description
            </Link>
            <Link className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] ">
              Additional Information
            </Link>
            <Link className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] ">
              Reviews <span className="text-secondary font-bold"> (0)</span>
            </Link>
          </div>
          <div className="border border-lightGray border-1 mt-4" />

          <ProductDescription />
        </div>
      </div>
      <BestSellerProducts />
    </div>
  );
}

export default ProductDetailPage;
