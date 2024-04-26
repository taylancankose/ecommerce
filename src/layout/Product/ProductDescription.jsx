import React from "react";
import Description from "../../components/Other/Description";

function ProductDescription() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center mt-10 font-montserrat ">
      {/* 1 */}
      <div className="lg:h-[392px] lg:w-[337px]">
        <img
          src="/src/assets/description.png"
          className="h-full w-full shadow-box-shadow-lg rounded-lg bg-cover obj-cover"
        />
      </div>
      {/* 2 */}
      <div className="lg:h-[392px] lg:w-2/5 2xl:w-1/5 lg:mx-20 mt-8">
        <Description />
      </div>
      {/* 3 */}
      <div className="lg:h-[392px] lg:w-3/6 2xl:w-1/3 mt-4 lg:mt-0">
        <div>
          <h3 className="text-2xl tracking-[0.1px] font-bold text-headerColor">
            the quick fox jumps over
          </h3>
          <div>
            <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
              <span>
                <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
              </span>
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
              <span>
                <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
              </span>
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
              <span>
                <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
              </span>
              the quick fox jumps over the lazy dog
            </h6>
            <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
              <span>
                <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
              </span>
              the quick fox jumps over the lazy dog
            </h6>
          </div>
        </div>
        <div className=" mt-6">
          <h3 className="text-2xl tracking-[0.1px] font-bold text-headerColor">
            the quick fox jumps over
          </h3>
          <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
            <span>
              <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
            </span>
            the quick fox jumps over the lazy dog
          </h6>
          <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
            <span>
              <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
            </span>
            the quick fox jumps over the lazy dog
          </h6>
          <h6 className="text-secondTextColor font-bold text-sm leading-6 ">
            <span>
              <i className="fa-solid fa-chevron-right mr-4 mt-7"></i>
            </span>
            the quick fox jumps over the lazy dog
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
