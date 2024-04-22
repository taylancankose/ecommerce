import React from "react";

function Header() {
  return (
    <div className="w-full">
      {/* Navbar Slogan */}
      <div className="md:hidden lg:flex items-center bg-headerColor p-6 justify-between">
        <div className="ml-2 lg:ml-4 flex items-center">
          <div className="flex items-center">
            <i class="fa fa-phone fa-sharp text-white lg:mr-2 mr-1 xl:text-lg text-sm"></i>
            <p className="font-bold text-white tracking-widest font-montserrat text-xs xl:text-lg">
              (225) 555-0118
            </p>
          </div>
          <div className="flex items-center ml-3 lg:ml-6">
            <i class="fa-regular fa-envelope text-white lg:mr-2 mr-1"></i>
            <p className="font-bold text-white tracking-widest font-montserrat text-xs xl:text-lg">
              michelle.rivera@example.com
            </p>
          </div>
        </div>
        <div>
          {" "}
          <p className="font-bold text-white tracking-widest font-montserrat text-xs xl:text-lg">
            Follow Us and get a chance to win 80% off
          </p>
        </div>
        <div className="mr-4 flex items-center justify-end">
          <p className="font-bold text-white tracking-widest font-montserrat text-xs mr-2 lg:mr-4  xl:text-lg">
            Follow Us:
          </p>
          <i class="fa fa-brands fa-instagram text-white mr-2 lg:mr-4 xl:text-lg text-sm"></i>
          <i class="fa fa-brands fa-youtube text-white mr-2 lg:mr-4 xl:text-lg text-sm"></i>
          <i class="fa fa-brands fa-facebook text-white mr-2 lg:mr-4 xl:text-lg text-sm"></i>
          <i class="fa fa-brands fa-twitter text-white mr-2 lg:mr-4 xl:text-lg text-sm"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
