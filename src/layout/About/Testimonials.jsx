import React from "react";

function Testimonials() {
  return (
    <div className="flex flex-wrap justify-between items-center text-center lg:bg-gray-200 h-[80vh]">
      {/* Left */}
      <div className="lg:w-[60%] h-full items-center justify-center flex text-center lg:text-left bg-primary">
        <div className="md:w-2/4">
          <h5 className="font-bold text-white ">WORK WITH US</h5>
          <h5 className="font-bold text-white my-9 text-5xl leading-[80px] tracking-[0.2px]">
            Now Let’s Grow Yours
          </h5>
          <h4 className="font-normal text-lg tracking-[0.2px] text-white">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </h4>
          <button className=" text-white border border-white rounded-md py-4 px-10 mt-9 font-bold text-sm tracking-[0.2px] rounded-ms">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-[30%] h-full mt-10 px-8 md:px-40 lg:px-0 md:mt-0 lg:flex relative hidden">
        <img src="/src/assets/testimonial-woman.png" className="" />
      </div>
    </div>
  );
}

export default Testimonials;
