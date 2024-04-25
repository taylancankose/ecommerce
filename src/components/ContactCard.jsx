import React from "react";

function ContactCard({ type = "ghost", icon }) {
  return (
    <>
      {type === "ghost" ? (
        <div className="text-center text-headerColor">
          <i className={`${icon} mb-4 text-primary text-7xl`}></i>
          <h6 className=" font-bold text-sm leading-6 tracking-[0.2px]">
            georgia.young@example.com
          </h6>
          <h6 className=" font-bold text-sm leading-6 tracking-[0.2px]">
            georgia.young@ple.com
          </h6>
          <h5 className=" font-bold leading-6 tracking-[0.1px] my-4">
            Get Support
          </h5>

          <button className="py-4 px-9 border border-primary rounded-full text-primary">
            Submit Request
          </button>
        </div>
      ) : (
        <div className="text-center bg-headerColor p-14 py-24 text-white">
          <i className={`${icon} mb-4 text-primary text-7xl`}></i>
          <h6 className=" font-bold text-sm leading-6 tracking-[0.2px]">
            georgia.young@example.com
          </h6>
          <h6 className=" font-bold text-sm leading-6 tracking-[0.2px]">
            georgia.young@ple.com
          </h6>
          <h5 className=" font-bold leading-6 tracking-[0.1px] my-4">
            Get Support
          </h5>

          <button className="py-4 px-9 border border-primary rounded-full text-primary">
            Submit Request
          </button>
        </div>
      )}
    </>
  );
}

export default ContactCard;
