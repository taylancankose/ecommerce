import React from "react";
import { Link } from "react-router-dom";

function TopSellerCard({ category }) {
  const activeRat = Math.round(category.rating);
  const passiveRat = Number(5 - activeRat);
  const stars = Array(activeRat).fill(1).concat(Array(passiveRat).fill(0));
  return (
    <Link
      to={{
        pathname: `/shop/${
          category.gender === "e" ? "erkek" : "kadin"
        }/${category.title.toLowerCase()}/${category?.id}`,
        state: category.gender,
      }}
    >
      <div
        key={category.id}
        className={`justify-center items-center md:mr-6 w-[240px] mt-4 hover:scale-105 transition ease-in duration-500 shadow-sm bg-white pb-4 
        `}
      >
        <img src={category.img} className={`h-80 w-full object-cover`} />

        <h5
          className={`ml-4 font-bold leading-6 tracking-[0.1px] text-headerColor mt-3`}
        >
          {category.title}
        </h5>
        <h5
          className={`font-bold leading-6 tracking-[0.2px] ml-4 text-secondTextColor mt-1 `}
        >
          {stars.map((star, i) => (
            <span key={i} className="">
              {star === 1 ? (
                <i className="fa-solid fa-star text-yellow mr-[2px] mt-2"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </span>
          ))}
          <span className="ml-2">{category.rating}</span>
        </h5>
      </div>
    </Link>
  );
}

export default TopSellerCard;
