import React, { useEffect, useState } from "react";
import CategoryCard from "../components/Cards/CategoryCard";
import ProductCard from "../components/Cards/ProductCard";
import Dropdown from "../components/Other/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useHistory } from "react-router-dom/";
import {
  getProducts,
  setFilter,
  setOffset,
} from "../store/actions/productActions";
import Pagination from "../components/Other/Pagination";

function ShopPage() {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const gender = location.state;
  const products = useSelector((state) => state.productReducer.productList);
  const categories = useSelector((state) => state.productReducer.categories);
  const loading = useSelector((state) => state.productReducer.loading);
  const sort = useSelector((state) => state.productReducer.sort);
  const filter = useSelector((state) => state.productReducer.filter);
  const [optionD, setOptionD] = useState("Popularity");
  const total = useSelector((state) => state.productReducer.total);
  const offset = useSelector((state) => state.productReducer.offset);
  const limit = useSelector((state) => state.productReducer.limit);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const { categoryId } = params;
  const page = Math.ceil(Number(total / limit));

  const updateURL = () => {
    const queryParams = new URLSearchParams();

    // Filtreleri ve diğer parametreleri URL'ye ekleyin
    queryParams.append("categoryId", categoryId);
    queryParams.append("filter", filter);
    queryParams.append("sort", sort);
    queryParams.append("limit", limit);
    queryParams.append("offset", offset);

    // URL'yi güncelleyin
    history.push({
      pathname: location.pathname,
      search: queryParams.toString(),
      state: location.state,
    });
  };

  const handlePaginate = (newPage) => {
    if (newPage === "first") {
      dispatch(setOffset(0));
      setCurrentPage(1);
    } else if (newPage === "prev") {
      if (currentPage === 1) return false;
      dispatch(setOffset(offset - limit));
      setCurrentPage(currentPage - 1);
    } else if (newPage === "next") {
      if (currentPage === page) return false;
      dispatch(setOffset(offset + limit));
      setCurrentPage(currentPage + 1);
    } else if (newPage === "last") {
      dispatch(setOffset(limit * (page - 1)));
      setCurrentPage(page);
    } else {
      const nextPage = parseInt(newPage);
      if (!isNaN(nextPage) && nextPage >= 1 && nextPage <= page) {
        setCurrentPage(nextPage);
        dispatch(setOffset(limit * (nextPage - 1)));
      }
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasyonlu bir şekilde gitmek için
    });
    updateURL();
  };
  useEffect(() => {
    dispatch(getProducts(categoryId, filter, sort, limit, offset));
    updateURL();
  }, [categoryId, filter, limit, offset]);

  const handleFilter = () => {
    dispatch(setOffset(0));
    if (optionD === "Popularity") {
      dispatch(getProducts(categoryId, "", null, 25, 0));
    } else {
      dispatch(getProducts(categoryId, filter, sort, limit, 0));
    }
    updateURL();
  };

  const handleChange = (e) => {
    dispatch(setOffset(0));
    dispatch(setFilter(e.target.value));
    // dispatch(setSort("Popularity"));
    setOptionD("Popularity");
    updateURL();
  };

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
            <div className="">
              <h6 className="font-bold text-secondTextColor text-sm leading-6 decoration-[0.2px] mb-4 md:mb-0">
                Showing {products?.length} from {total} results
              </h6>
              {/* Views */}
              <div className="flex items-center mb-4 md:mb-0 mt-4">
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
            </div>
            {/* Input */}
            <div className="w-2/5 justify-center flex m-auto ">
              <input
                onChange={handleChange}
                placeholder="Search the product"
                className=" bg-dropDownGray w-full py-4 m-auto pl-4 border-borderGray border rounded-md "
              />
            </div>
            {/* Filter */}
            <div className="flex items-center ">
              {/* Dropdown */}
              <Dropdown
                optionD={optionD}
                setOptionD={setOptionD}
                updateURL={updateURL}
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
        </div>

        {/* Results */}
        <div className="flex items-center justify-center lg:justify-between md:mx-24 flex-wrap pb-6">
          {products?.map((product) =>
            loading ? (
              <p key={product.id}>Loading</p>
            ) : (
              <ProductCard
                key={product.id}
                product={product}
                imgClass={"md:w-72"}
              />
            )
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          page={page}
          handlePaginate={handlePaginate}
        />
      </div>
    </div>
  );
}

export default ShopPage;
