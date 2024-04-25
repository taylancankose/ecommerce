import React from "react";

function ContactCTA() {
  return (
    <>
      <img src="/src/assets/arrow-cta.png" className="h-24 mt-8" />
      <h5 className="my-8 font-bold leading-6 tracking-[0.1px]">
        WE Can't WAIT TO MEET YOU
      </h5>
      <h1 className="mb-8 font-bold leading-[80px] tracking-[0.2px] text-5xl md:text-6xl">
        Let’s Talk
      </h1>
      <button className="py-4 px-10 bg-primary rounded-md font-bold text-white ">
        Try it free now
      </button>
    </>
  );
}

export default ContactCTA;
