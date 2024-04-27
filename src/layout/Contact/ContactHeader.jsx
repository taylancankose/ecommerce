import React from "react";

function ContactHeader() {
  return (
    <div className="flex flex-wrap justify-center items-center ">
      {/* Left */}
      <div className="md:w-3/6 text-center lg:text-left">
        <h5 className="font-bold text-headerColor ">CONTACT US</h5>
        <h5 className="font-bold text-headerColor my-9 text-6xl leading-[80px] tracking-[0.2px]">
          Get in touch today!
        </h5>
        <h4 className="font-normal text-xl tracking-[0.2px] text-secondTextColor lg:w-2/3">
          We know how large objects will act, but things on a small scale
        </h4>
        <h3 className="my-9 text-headerColor font-bold text-2xl tracing-[0.1px]">
          Phone : +451 215 215
        </h3>
        <h3 className="mb-9 text-headerColor font-bold text-2xl tracing-[0.1px]">
          Fax : +451 215 215
        </h3>
        <div className="flex items-center text-headerColor text-3xl justify-center lg:justify-normal">
          <i className="fa-brands fa-twitter  mr-7"></i>
          <i className="fa-brands fa-facebook  mr-7"></i>
          <i className="fa-brands fa-instagram mr-7"></i>
          <i className="fa-brands fa-linkedin "></i>
        </div>
      </div>
      {/* Right */}
      <div className="lg:w-1/3 mt-10 md:px-40 lg:px-0 md:mt-0 flex relative">
        <img src="/src/assets/contact-family.png" />
      </div>
    </div>
  );
}

export default ContactHeader;
