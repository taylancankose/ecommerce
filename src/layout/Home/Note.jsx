import React, { useState } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import { useSelector } from "react-redux";

function Categories() {
  const categories = useSelector((state) => state.productReducer.categories);
  const [activeCategory, setActiveCategory] = useState("e");
  const sortedCats = categories?.sort((a, b) => b.rating - a.rating);
  const catsByGender = sortedCats
    .filter((cat) => cat.gender === activeCategory)
    .slice(0, 5);
  return (
    <div className="w-full bg-bgGray pb-10">
      <div className="flex items-center justify-center mx-28">
        <div className="w-2/5 h-full">
          <img
            className=" object-cover"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="w-3/5 h-full px-12">
          <div className="">
            <div className="flex items-center">
              <h5 className="font-bold text-headerColor leading-6 tracking-[0.1px] mr-12">
                BESTSELLER PRODUCTS
              </h5>
              <h6
                className={`font-bold text-${
                  activeCategory === "e" ? "primary" : "secondTextColor"
                } text-sm leading-6 tracking-[0.2px] mr-12`}
              >
                Men
              </h6>
              <h5
                className={`font-bold text-${
                  activeCategory === "k" ? "primary" : "secondTextColor"
                } leading-6 tracking-[0.2px] mr-12`}
              >
                Women
              </h5>
              <button
                onClick={() => setActiveCategory("e")}
                className={`px-5 py-3 rounded-full border border-${
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
                className={`px-5 py-3 rounded-full border border-${
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
            <div className="bg-lightGray border my-4" />
          </div>
          <div className="flex flex-wrap gap-x-10">
            {catsByGender?.map(
              (category) =>
                category.gender === activeCategory && (
                  <div
                    key={category.id}
                    className={`justify-center text-center items-center md:mr-6 w-[240px] mt-4 hover:scale-105 transition ease-in duration-500 shadow-sm bg-white pb-4 
                      `}
                  >
                    <img
                      src={category.img}
                      className={`h-80 w-full object-cover`}
                    />

                    <h5
                      className={`font-bold leading-6 tracking-[0.1px]  text-headerColor mt-2`}
                    >
                      {category.title}
                    </h5>
                    <h5
                      className={`font-bold leading-6 tracking-[0.2px]  text-secondTextColor mt-1 `}
                    >
                      {category.rating}
                    </h5>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
