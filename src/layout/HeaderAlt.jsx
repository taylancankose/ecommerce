import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CarouselSlide from "../components/CarouselSlide";

function Header({ data, swiperClassName, swiperContainerClassName }) {
  return (
    <div className={` font-montserrat md:h-screen bg-bgGray`}>
      {/* Carousel */}
      <Swiper
        slidesPerView={1}
        className={`h-screen lg:h-[calc(100vh-18%)] bg-no-repeat bg-cover`}
        navigation
        scrollbar
        pagination
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <CarouselSlide
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              buttonText={item.buttonText}
              background={item.background}
              price={item?.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Header;
