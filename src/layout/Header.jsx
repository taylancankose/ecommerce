import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Header() {
  return (
    <div className="font-montserrat md:h-screen">
      <Navbar />
      {/* Carousel */}
      <Swiper
        slidesPerView={1}
        className="h-full lg:h-[calc(100vh-18%)] bg-no-repeat"
        navigation
        scrollbar
        pagination
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="bg-header-bg h-full bg-no-repeat bg-cover bg-center md:bg-top flex">
            <div className="p-6 m-auto text-center md:text-left md:w-3/6 md:flex md:flex-col md:ml-40 md:justify-around md:h-96 ">
              <h5 className="text-white font-bold leading-6 tracking-[0.1px] mb-4 md:mb-0">
                SUMMER 2024
              </h5>
              <h1 className="font-bold text-white md:text-6xl tracking-[0.2px] leading-[80px] mb-4 md:mb-0 text-4xl">
                New Collection
              </h1>
              <h4 className="tracking-[0.2px] leading-8 font-normal text-xl text-white mb-4 md:mb-0 w-5/6 m-auto md:w-3/6 md:m-0">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="bg-success gap-3 py-4 px-10 round rounded-sm text-white font-bold text-xl leading-8 tracking-[0.1px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-header-bg h-full bg-no-repeat bg-cover bg-center md:bg-top flex">
            <div className="p-6 m-auto text-center md:text-left md:w-3/6 md:flex md:flex-col md:ml-40 md:justify-around md:h-96 ">
              <h5 className="text-white font-bold leading-6 tracking-[0.1px] mb-4 md:mb-0">
                SUMMER 2024
              </h5>
              <h1 className="font-bold text-white md:text-6xl tracking-[0.2px] leading-[80px] mb-4 md:mb-0 text-4xl">
                Collection
              </h1>
              <h4 className="tracking-[0.2px] leading-8 font-normal text-xl text-white mb-4 md:mb-0 w-5/6 m-auto md:w-3/6 md:m-0">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="bg-success gap-3 py-4 px-10 round rounded-sm text-white font-bold text-xl leading-8 tracking-[0.1px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
