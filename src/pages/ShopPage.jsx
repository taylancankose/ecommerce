import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Dropdown from "../components/DropDown";

function ShopPage() {
  return (
    <div className="font-montserrat">
      <div className="p-2 md:p-10 bg-bgGray w-full">
        {/* Top Navigator */}
        <div className="md:flex text-center justify-center md:justify-between items-center md:mx-16">
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
        <div className="flex justify-center md:justify-between items-center flex-wrap pt-6 md:mx-16">
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
        <div className="md:mx-4 xl:mx-24 mt-4">
          <div className="justify-center flex flex-col md:flex-row md:justify-between items-center">
            <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px] mb-4 md:mb-0">
              Showing all 12 results
            </h6>
            {/* Views */}
            <div className="flex items-center mb-4 md:mb-0">
              <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px] mr-4">
                Views:
              </h6>
              <div className="items-center justify-center flex border border-lightGray rounded-md w-10 h-10 mr-4">
                <i class="fa-brands fa-microsoft text-headerColor"></i>
              </div>
              <div className="items-center justify-center flex border border-lightGray rounded-md w-10 h-10 mr-4">
                <i class="fa-solid fa-list text-headerColor"></i>
              </div>
            </div>
            {/* Filter */}
            <div className="flex items-center">
              {/* Dropdown */}
              <Dropdown
                options={["Popularity", "Relevance", "Price Low to High"]}
              />
              <button className="bg-primary py-4 px-6 text-sm leading-6 tracking-[0.2px] text-white text-center rounded-md mx-4">
                Filter
              </button>
            </div>
          </div>
        </div>
        {/* Results */}
        <div className="flex items-center justify-between md:mx-24 flex-wrap pb-6">
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
