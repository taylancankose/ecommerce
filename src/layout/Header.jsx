import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CarouselSlide from "../components/CarouselSlide";

function Header({
  title,
  subtitle,
  description,
  buttonText,
  price,
  secondButtonText,
  background,
  container,
  isAbsolute,
  color,
}) {
  return (
    <div
      className={`font-montserrat md:h-screen w-full ${container} relative `}
    >
      {/* Carousel */}
      <Swiper
        slidesPerView={1}
        className="h-screen bg-no-repeat bg-cover" //lg:h-[calc(100vh-18%)]
        navigation
        scrollbar
        pagination
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        <SwiperSlide>
          <CarouselSlide
            title={title}
            subtitle={subtitle}
            description={description}
            buttonText={buttonText}
            background={background}
            isAbsolute={isAbsolute}
            containerClass="text-white"
            price={price}
            secondButtonText={secondButtonText}
            textColor="white"
            color={color}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            title={title}
            subtitle={subtitle}
            description={description}
            buttonText={buttonText}
            background={background}
            isAbsolute={isAbsolute}
            containerClass="text-white"
            price={price}
            secondButtonText={secondButtonText}
            textColor="white"
            color={color}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
