import React from "react";
import logo from "../assets/logo-no-bg.png";

function Footer() {
  return (
    <div className="font-montserrat">
      <div className="md:px-20 p-10  bg-bgGray ">
        <div className="md:flex items-center text-center justify-between md:text-left md:mx-10">
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-hooli block md:inline"></i>
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-lyft block md:inline"></i>
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-pied-piper-hat block md:inline"></i>
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-stripe block md:inline"></i>
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-aws block md:inline"></i>
          <i class="md:text-6xl text-8xl lg:text-8xl fa-brands fa-reddit-alien block md:inline"></i>
        </div>
      </div>
      {/* Company & Socials */}
      <div className="md:p-20 p-10 md:flex justify-between mx-4 -ml-4 md:ml-4">
        <img src={logo} className="h-14 md:ml-10 mb-4 md:mb-0" />
        <div className="flex items-center text-primary text-3xl md:mr-10">
          <i className="fa-brands fa-facebook md:mr-8 mr-2"></i>
          <i className="fa-brands fa-twitter md:mr-8 mr-2"></i>
          <i className="fa-brands fa-instagram "></i>
        </div>
      </div>
      <div className="md:border-b-2 md:mx-32 hidden md:block" />

      {/* Navs */}
      <div className="md:flex flex-wrap justify-between items-center px-3 md:px-20 py-14 bg-white">
        {/* Company Info */}
        <div className="md:ml-14 mb-4">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-lg text-headerColor mb-4">
            Company Info
          </h5>
          <ul className="text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px]">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Carries</li>
            <li className="mt-2">We are hiring</li>
            <li className="mt-2">Blog</li>
          </ul>
        </div>
        {/* Legal */}
        <div className="mb-4">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-lg text-headerColor mb-4">
            Legal
          </h5>
          <ul className="text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px]">
            <li className="mt-2">About Us</li>
            <li className="mt-2">Carries</li>
            <li className="mt-2">We are hiring</li>
            <li className="mt-2">Blog</li>
          </ul>
        </div>
        {/* Features */}
        <div className="mb-4">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-lg text-headerColor mb-4">
            Features
          </h5>
          <ul className="text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px]">
            <li className="mt-2">Business Marketing</li>
            <li className="mt-2">User Analytic</li>
            <li className="mt-2">Live Chat</li>
            <li className="mt-2">Unlimited Support</li>
          </ul>
        </div>
        {/* Resources */}
        <div className="mb-4">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-lg text-headerColor mb-4">
            Resources
          </h5>
          <ul className="text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px]">
            <li className="mt-2">IOS & Android</li>
            <li className="mt-2">Watch a Demo</li>
            <li className="mt-2">Customers</li>
            <li className="mt-2">API</li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div className="md:mr-14 md:ml-10 lg:ml-0 mb-4 justify-center ">
          <h5 className="font-bold leading-6 tracking-[0.1px] text-lg text-headerColor mb-4">
            Get In Touch
          </h5>
          <div className="flex">
            <input
              placeholder="Email"
              className="border border-[#E6E6E6] rounded-tl-md rounded-bl-md h-16 md:px-3 bg-[#F9F9F9]"
            />
            <button className="h-16 border border-[#E6E6E6] rounded-tr-md rounded-br-md px-2 bg-primary text-white">
              Subscribe
            </button>
          </div>
          <p className="font-normal text-secondTextColor leading-7 tracking-[0.2px] text-xs mt-2">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>

      {/* Trademark */}
      <div className="md:px-24 py-8 bg-bgGray ">
        <h6 className="md:mx-10 text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px] md:text-left text-center">
          Made With Love By Finland All Right Reserved
        </h6>
      </div>
    </div>
  );
}

export default Footer;
