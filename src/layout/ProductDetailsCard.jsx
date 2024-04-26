import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function ProductDetailsCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="xl:mx-24 mx-4">
      <div className="lg:flex items-center md:justify-left">
        <div className="lg:w-8/12 xl:w-5/12 w-full md:mr-4 xl:mr-0 ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
          >
            <SwiperSlide>
              <img
                src="/src/assets/product-detail-1.png"
                className="aspect-square"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/assets/product-detail-2.png"
                className="aspect-square"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full mt-4 lg:mt-0">
            <Swiper
              className="lg:mt-4"
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              <SwiperSlide>
                <img
                  src="/src/assets/product-detail-2.png"
                  className="aspect-square"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/product-detail-1.png"
                  className="aspect-square"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 w-full xl:w-5/12 lg:mb-48 xl:ml-36 md:ml-12 ">
          <h4 className="font-medium text-xl text-headerColor tracking-[0.2px]  lg:w-full ">
            Floating Phone
          </h4>
          {/* Stars */}
          <div className="mt-3  lg:w-full ">
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-solid fa-star text-yellow text-2xl mr-2"></i>
            <i className="fa-regular fa-star text-yellow text-2xl"></i>
          </div>
          <h2 className="text-headerColor font-bold text-2xl mt-5  lg:w-full ">
            $1,139.33
          </h2>
          <div className="flex items-center mt-3  lg:w-full ">
            <h6 className="text-secondTextColor text-sm font-bold tracking-[0.2px] mr-2">
              Availability :
            </h6>
            <h6 className="text-primary text-sm font-bold tracking-[0.2px]">
              In Stock
            </h6>
          </div>
          <p className="font-normal text-sm tracking-[0.2px] text-lightSecontTextColor mt-8  lg:w-full ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="border-t mt-5 border-1 border-muted  lg:w-full " />
          {/* Colors */}
          <div className="flex items-center mt-8 ">
            <div className="h-8 w-8 rounded-2xl mr-4 bg-primary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-secondary" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-alert" />
            <div className="h-8 w-8 rounded-2xl mr-4 bg-headerColor" />
          </div>
          {/* BTN container */}
          <div className="mt-8 lg:mt-20 flex items-center ">
            <button className="mr-3 font-bold text-white text-sm leading-6 tracking-[0.2px] bg-primary py-3 px-5 rounded-md hover:opacity-95">
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
