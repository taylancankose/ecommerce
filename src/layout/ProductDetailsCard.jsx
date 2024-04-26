import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function ProductDetailsCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="md:mx-24 mx-4 ">
      <div className="lg:flex md:justify-between">
        <div className="lg:w-4/12 w-full md:mr-4 xl:mr-0">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                className="aspect-square"
                src="/src/assets/product-detail-1.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="aspect-square"
                src="/src/assets/product-detail-2.png"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="mt-4"
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            <SwiperSlide>
              <img
                className="aspect-square"
                src="/src/assets/product-detail-2.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="aspect-square"
                src="/src/assets/product-detail-1.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-4 lg:mt-0 lg:w-7/12 ">
          <h4 className="font-normal text-xl text-headerColor tracking-[0.2px]">
            Floating Phone
          </h4>
          {/* Stars */}
          <div className="mt-3">STARS</div>
          <h2 className="text-headerColor font-bold text-2xl mt-5">
            $1,139.33
          </h2>
          <div className="flex items-center mt-3">
            <h6 className="text-secondTextColor text-sm font-bold tracking-[0.2px] mr-2">
              Availability :
            </h6>
            <h6 className="text-primary text-sm font-bold tracking-[0.2px]">
              In Stock
            </h6>
          </div>
          <p className="font-normal text-sm tracking-[0.2px] text-lightSecontTextColor mt-8 w-2/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="border-t mt-5 border-1 border-muted w-2/3" />
          {/* Colors */}
          <div className="flex items-center mt-8">
            <div className="h-8 w-8 rounded-2xl mr-4 bg-primary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-secondary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-alert" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-headerColor" />
          </div>
          {/* BTN container */}
          <div className="mt-8 lg:mt-20 flex items-center ">
            <button className="mr-3 font-bold text-white text-sm leading-6 tracking-[0.2px] bg-primary w-1/3 h-12 rounded-md hover:opacity-95">
              Select Options
            </button>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className=" fa-regular fa-heart text-headerColor text-lg font-medium"></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className="fa-regular fa-credit-card text-headerColor text-lg "></i>
            </div>
            <div className="mr-3 w-12 h-12 bg-white border-lightSecontTextColor border rounded-full flex items-center justify-center hover:scale-105 transition-transform ease-in duration-300">
              <i className="fa-solid fa-eye text-headerColor text-lg font-medium"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
