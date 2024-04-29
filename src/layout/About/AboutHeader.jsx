import React from "react";

function AboutHeader() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center text-center">
        {/* Left */}
        <div className="md:w-3/6 2xl:w-2/6 text-center lg:text-left">
          <h5 className="font-bold text-headerColor ">ABOUT COMPANY</h5>
          <h5 className="font-bold text-headerColor my-9 text-6xl leading-[80px] tracking-[0.2px]">
            ABOUT US
          </h5>
          <h4 className="font-normal text-xl tracking-[0.2px] text-secondTextColor lg:w-2/3">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="text-white bg-primary rounded-md py-4 px-10 mt-9 font-bold text-sm tracking-[0.2px] rounded-ms">
            Get Quote Now
          </button>
        </div>

        {/* Right */}
        <div className="lg:w-1/3 mt-10 px-8 md:px-40 lg:px-0 md:mt-0 flex relative">
          <img src="https://i.ibb.co/2vk4nh5/about-woman.png" />
        </div>
      </div>
    </>
  );
}

export default AboutHeader;
