import React from "react";

function CategoryCard() {
  return (
    <div className="bg-card md:h-64 h-60 w-60 bg-center bg-cover mb-4">
      <div className="backdrop-brightness-[0.65] w-full h-full justify-center items-center flex-col flex">
        <h5 className="font-bold leading-6 text-white text-center tracking-[0.1px] mb-2">
          CLOTHS
        </h5>
        <p className="font-normal leading-5 text-white text-center tracking-[0.2px] ">
          5 Items
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
