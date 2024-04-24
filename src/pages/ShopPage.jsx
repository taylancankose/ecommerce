import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  return (
    <div className="font-montserrat">
      <div className="p-2 md:p-10 bg-bgGray w-full">
        {/* Top Navigator */}
        <div className="md:flex text-center justify-center md:justify-between items-center md:mx-32">
          <h3 className="text-headerColor font-bold text-2xl tracking-[0.1px] mt-4 md:mt-0">
            Shop
          </h3>
          <div className="flex justify-center mt-4 md:mt-0 items-center">
            <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-headerColor mr-2">
              Home
            </h2>
            <i className="fa-solid fa-chevron-right font-bold text-xs leading-6 tracking-[0.2px] text-muted mr-2"></i>
            <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-muted">
              Shop
            </h2>
          </div>
        </div>

        {/* Category Cards */}
        <div className="flex justify-center md:justify-between items-center flex-wrap pt-6 md:mx-32">
          {/* Card */}
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      {/* Products */}
      <div className="p-4 bg-white">
        <div className="md:mx-40 mt-4">
          <div>
            <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px]">
              Showing all 12 results
            </h6>
            <div>
              <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px]">
                Showing all 12 results
              </h6>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
        {/* Results */}
        <div className="flex items-center justify-center flex-wrap pb-6">
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
          <ProductCard imgClass={"md:w-72"} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
