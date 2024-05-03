import React, { useState } from "react";
import { useSelector } from "react-redux";
import TopSellerCard from "../../components/Cards/TopSellerCard";
import TrendTitle from "../../components/Other/TrendTitle";

function Categories() {
  const categories = useSelector((state) => state.productReducer.categories);

  const [activeCategory, setActiveCategory] = useState("e");

  const sortedCats = categories?.sort((a, b) => b.rating - a.rating);

  const catsByGender = sortedCats
    ?.filter((cat) => cat.gender === activeCategory)
    .slice(0, 5);

  return (
    <div className="w-full bg-bgGray pb-10 overflow-x-hidden">
      <div className="mx-4 md:mx-28">
        <TrendTitle
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="bg-lightGray border my-4" />
        <div className="flex flex-wrap justify-center gap-x-10">
          {catsByGender?.map(
            (category) =>
              category.gender === activeCategory && (
                <TopSellerCard category={category} key={category.id} />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
