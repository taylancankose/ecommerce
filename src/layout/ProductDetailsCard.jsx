import React from "react";

function ProductDetailsCard() {
  return (
    <div className="md:mx-24 mx-4">
      <div className="lg:flex items-center md:justify-between">
        <div className="lg:w-5/12 w-full md:mr-4 xl:mr-0">
          <img src="/src/assets/product-detail-1.png" />
        </div>
        <div className="mt-4 lg:mt-0 lg:w-6/12 ">
          <h4 className="font-normal text-xl text-headerColor tracking-[0.2px]">
            Floating Phone
          </h4>
          {/* Stars */}
          <div className="mt-3">STARS</div>
          <h2 className="text-headerColor font-bold text-2xl mt-5">
            $1,139.33
          </h2>
          <div className="flex items-center mt-3">
            <h6 className="text-secondTextColor text-sm font-bold tracking-[0.2px] mr-2">
              Availability :
            </h6>
            <h6 className="text-primary text-sm font-bold tracking-[0.2px]">
              In Stock
            </h6>
          </div>
          <p className="font-normal text-sm tracking-[0.2px] text-lightSecontTextColor mt-8 w-2/3">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="border-t mt-5 border-1 border-muted w-2/3" />
          {/* Colors */}
          <div className="flex items-center mt-8">
            <div className="h-8 w-8 rounded-2xl mr-4 bg-primary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-secondary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-alert" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-headerColor" />
          </div>
          {/* BTN container */}
          <div className="mt-8 lg:mt-20 flex items-center ">
            <button className="mr-3 font-bold text-white text-sm leading-6 tracking-[0.2px] bg-primary w-1/3 h-12 rounded-md hover:opacity-95">
              Select Options
            </button>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className=" fa-regular fa-heart text-headerColor text-lg font-medium"></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i class="fa-regular fa-credit-card text-headerColor text-lg "></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className="fa-solid fa-eye text-headerColor text-lg font-medium"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
