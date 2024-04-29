import React from "react";
import { Link } from "react-router-dom/";

function CategoryCard({ category }) {
  return (
    <Link
      to={{
        pathname: `/shop/${
          category?.gender === "k" ? "kadin" : "erkek"
        }/${category?.title.toLowerCase()}/${category?.id}`,
        state: category.gender,
      }}
      className="hover:scale-105 transition ease-in duration-300"
    >
      <div className="relative h-72 w-48 mb-4 ">
        <img
          src={category.img}
          className=" h-72 w-48 bg-center bg-cover object-cover mb-4 "
        />
        <div className="absolute top-0 left-0 right-0 h-72 w-48 backdrop-brightness-[0.55]  justify-center items-center flex-col flex z-10">
          <h5 className="font-bold leading-6 text-white text-center tracking-[0.1px] mb-2 z-20">
            {category?.title}
          </h5>
          <p className="font-normal leading-5 text-white text-center tracking-[0.2px] z-20">
            5 Items
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
