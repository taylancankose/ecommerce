import React from "react";

function SubscribeInput() {
  return (
    <div className="flex">
      <input
        placeholder="Email"
        className="border border-[#E6E6E6] rounded-tl-md rounded-bl-md h-16 md:px-3 w-2/3 bg-[#F9F9F9]"
      />
      <button className="h-16 border border-[#E6E6E6] rounded-tr-md rounded-br-md sm:px-2 bg-primary text-white">
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeInput;
