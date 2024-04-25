import React from "react";

function AboutContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Content */}
      <div className="w-5/6 2xl:w-2/3 text-center m-auto lg:text-left">
        <p className="text-error font-normal text-sm tracking-[0.2px] md:justify-start ">
          Problems trying
        </p>
        <div className="mt-6 lg:flex text-center lg:text-left items-start m-auto">
          <h3 className="text-headerColor font-bold text-2xl tracking-[0.1px] mb-10 lg:mb-0 md:mr-10">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <h2 className=" ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h2>
        </div>
      </div>

      {/* Stats */}
      <div className="py-24 md:flex justify-between items-center w-5/6 xl:w-2/3">
        <div className="text-center mb-10 md:mb-0">
          <h1 className="text-headerColor font-bold text-6xl leading-[80px] tracking-[0.2px]">
            15K
          </h1>
          <h5 className="text-secondTextColor font-bold leading-6 tracking-[0.1px]">
            Happy Customers
          </h5>
        </div>
        <div className="text-center mb-10 md:mb-0">
          <h1 className="text-headerColor font-bold text-6xl leading-[80px] tracking-[0.2px]">
            150K
          </h1>
          <h5 className="text-secondTextColor font-bold leading-6 tracking-[0.1px]">
            Monthly Visitors
          </h5>
        </div>
        <div className="text-center mb-10 md:mb-0">
          <h1 className="text-headerColor font-bold text-6xl leading-[80px] tracking-[0.2px]">
            15
          </h1>
          <h5 className="text-secondTextColor font-bold leading-6 tracking-[0.1px]">
            Countries Worldwide
          </h5>
        </div>
        <div className="text-center mb-10 md:mb-0">
          <h1 className="text-headerColor font-bold text-6xl leading-[80px] tracking-[0.2px]">
            100+
          </h1>
          <h5 className="text-secondTextColor font-bold leading-6 tracking-[0.1px]">
            Top Partners
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

// md:w-3/6 2xl:w-[45%]
