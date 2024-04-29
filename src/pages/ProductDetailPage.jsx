import React from "react";
import { Link, useHistory } from "react-router-dom/";
import ProductDetailsCard from "../layout/Product/ProductDetailsCard";
import ProductDescription from "../layout/Product/ProductDescription";
import BestSellerProducts from "../layout/Product/BestSellerProducts";
import { useSelector } from "react-redux";
import Spinner from "../components/Loaders/Spinner";

function ProductDetailPage() {
  const history = useHistory();
  const selectedProduct = useSelector(
    (state) => state.productReducer.selectedProduct
  );
  const loading = useSelector((state) => state.productReducer.loading);
  console.log(selectedProduct);
  return (
    <div className="font-montserrat">
      <div className="p-2 md:p-10 bg-bgGray">
        {/* Top Navigator */}
        <div className="flex mt-4 md:mt-0 items-center lg:ml-24 justify-center lg:justify-start py-10 lg:py-0">
          <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-headerColor mr-2">
            Home
          </h2>
          <i className="fa-solid fa-chevron-right font-bold text-xs leading-6 tracking-[0.2px] text-muted mr-2"></i>
          <h2
            onClick={() => history.goBack()}
            className="cursor-pointer font-bold text-sm leading-6 tracking-[0.2px] text-muted"
          >
            Shop
          </h2>
          <i className="fa-solid fa-chevron-right font-bold text-xs leading-6 tracking-[0.2px] text-muted mx-2"></i>
          <h2 className="font-bold text-sm leading-6 tracking-[0.2px] text-muted">
            {selectedProduct.name}
          </h2>
        </div>
      </div>

      <div className="p-2 md:p-10 bg-bgGray">
        <div className="lg:mx-24 relative">
          <ProductDetailsCard selectedProduct={selectedProduct} />
          {loading && <Spinner />}
        </div>
      </div>

      <div className="p-2 md:pt-10 md:px-10">
        <div className="md:mx-24 mx-4  ">
          <div className="flex flex-wrap items-center justify-center md:gap-12 ">
            <Link
              to=""
              className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] mr-4 md:mr-0"
            >
              Description
            </Link>
            <Link
              to=""
              className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] "
            >
              Additional Information
            </Link>
            <Link
              to=""
              className="font-semibold text-secondTextColor md:text-sm text-xs leading-6 tracking-[0.2px] "
            >
              Reviews <span className="text-secondary font-bold"> (0)</span>
            </Link>
          </div>
          <div className="border border-lightGray border-1 mt-4 bg-gray-500 " />
        </div>
        <div className="h-full lg:mx-24">
          <ProductDescription />
        </div>
      </div>
      <div>
        <BestSellerProducts />
      </div>
    </div>
  );
}

export default ProductDetailPage;
