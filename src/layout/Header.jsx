import React, { useState } from "react";
import Logo from "../assets/logo-no-bg.png";
import { Link } from "react-router-dom/";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
