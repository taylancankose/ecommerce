import React, { useEffect, useState } from "react";
import CategoryCard from "../components/Cards/CategoryCard";
import ProductCard from "../components/Cards/ProductCard";
import Dropdown from "../components/Other/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom/";
import { getProducts, setFilter } from "../store/actions/productActions";

function ShopPage() {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const gender = location?.state;
  const products = useSelector((state) => state.productReducer.productList);
  const categories = useSelector((state) => state.productReducer.categories);
  const loading = useSelector((state) => state.productReducer.loading);
  const sort = useSelector((state) => state.productReducer.sort);
  const filter = useSelector((state) => state.productReducer.filter);
  const [optionD, setOptionD] = useState("Popularity");

  const { categoryId } = params;
  useEffect(() => {
    dispatch(getProducts(categoryId, filter, sort));
  }, [categoryId, filter]);

  const handleFilter = () => {
    dispatch(getProducts(categoryId, filter, sort));
  };

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
    // dispatch(setSort("Popularity"));
    setOptionD("Popularity");
  };
  console.log(products[0]);
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
        <div className="flex justify-center md:justify-between gap-2 items-center flex-wrap pt-6 md:mx-16">
          {/* Card */}
          {categories.map(
            (category) =>
              category.gender === gender && (
                <CategoryCard key={category.id} category={category} />
              )
          )}
        </div>
      </div>
      {/* Products */}
      <div className="p-4 bg-white">
        <div className="md:mx-4 xl:mx-24 mt-4">
          <div className="justify-center flex flex-col md:flex-row md:justify-between items-center">
            <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px] mb-4 md:mb-0">
              Showing all {products?.length} results
            </h6>
            {/* Views */}
            <div className="flex items-center mb-4 md:mb-0">
              <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px] mr-4">
                Views:
              </h6>
              <div className="items-center justify-center flex border border-lightGray rounded-md w-10 h-10 mr-4">
                <i className="fa-brands fa-microsoft text-headerColor"></i>
              </div>
              <div className="items-center justify-center flex border border-lightGray rounded-md w-10 h-10 mr-4">
                <i className="fa-solid fa-list text-headerColor"></i>
              </div>
            </div>
            {/* Filter */}
            <div className="flex items-center">
              {/* Dropdown */}
              <Dropdown
                optionD={optionD}
                setOptionD={setOptionD}
                options={[
                  "Popularity",
                  "Rating High To Low",
                  "Rating Low To High",
                  "Price High To Low",
                  "Price Low To High",
                ]}
              />
              <button
                onClick={handleFilter}
                className="bg-primary py-4 px-6 text-sm leading-6 tracking-[0.2px] text-white text-center rounded-md mx-4"
              >
                Filter
              </button>
            </div>
          </div>
          <div className="py-6">
            <input
              onChange={handleChange}
              placeholder="Search the product"
              className=" bg-dropDownGray w-1/2 py-4 m-auto pl-4 border-borderGray border rounded-md "
            />
          </div>
        </div>
        {/* Results */}
        <div className="flex items-center justify-center lg:justify-between md:mx-24 flex-wrap pb-6">
          {products?.map((product) =>
            loading ? (
              <p>Loading</p>
            ) : (
              <ProductCard
                key={product.id}
                product={product}
                imgClass={"md:w-72"}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
