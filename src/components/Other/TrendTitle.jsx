import React from "react";

function TrendTitle({ setActiveCategory, activeCategory }) {
  return (
    <div>
      <div className="justify-center m-auto text-center mb-4">
        <h3 className="font-bold text-3xl text-headerColor">
          <span className="text-alert ">Trending</span> Products
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <h5 className="hidden lg:inline font-bold text-headerColor leading-6 tracking-[0.1px] mr-12">
          BESTSELLER PRODUCTS
        </h5>
        <h6
          onClick={() => setActiveCategory("e")}
          className={`cursor-pointer font-bold text-${
            activeCategory === "e" ? "primary" : "secondTextColor"
          }   leading-6 tracking-[0.2px] mr-12`}
        >
          Men
        </h6>
        <h5
          onClick={() => setActiveCategory("k")}
          className={`cursor-pointer font-bold text-${
            activeCategory === "k" ? "primary" : "secondTextColor"
          } leading-6 tracking-[0.2px] lg:mr-12`}
        >
          Women
        </h5>
        <button
          onClick={() => setActiveCategory("e")}
          className={`hidden lg:inline px-5 py-3 rounded-full border border-${
            activeCategory === "e" ? "muted" : "secondTextColor"
          } mr-4`}
          disabled={activeCategory === "e" && true}
        >
          <i
            className={`fa-solid fa-chevron-left text-${
              activeCategory === "e" ? "muted" : "secondTextColor"
            }`}
          ></i>
        </button>
        <button
          onClick={() => setActiveCategory("k")}
          className={`hidden lg:inline px-5 py-3 rounded-full border border-${
            activeCategory === "k" ? "muted" : "secondTextColor"
          } mr-4`}
          disabled={activeCategory === "k" && true}
        >
          <i
            className={`fa-solid fa-chevron-right text-${
              activeCategory === "k" ? "muted" : "secondTextColor"
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default TrendTitle;
