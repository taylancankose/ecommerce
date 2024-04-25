import React from "react";

function TeamCard({ img, name, title, facebook, instagram, twitter }) {
  return (
    <div className="bg-white mt-8 lg:mt-0 lg:w-2/5 xl:w-1/5 md:w-3/4 pb-12 shadow-sm">
      <img className="flex m-auto w-full" src={img} />
      <h5 className="font-bold text-headerColor text-center leading-6 tracking-[0.1px] mt-7">
        {name}
      </h5>
      <h6 className="font-bold text-secondTextColor text-center text-sm leading-6 tracking-[0.1px] my-3">
        {title}
      </h6>
      <div className="flex items-center text-primary text-2xl justify-center">
        <i className="fa-brands fa-facebook  mr-5"></i>
        <i className="fa-brands fa-instagram  mr-5"></i>
        <i className="fa-brands fa-twitter "></i>
      </div>
    </div>
  );
}

export default TeamCard;
