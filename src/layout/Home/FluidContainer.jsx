import React from "react";
import CarouselSlide from "../../components/Other/CarouselSlide";
import couple from "../../assets/couple.png";

function FluidContainer() {
  return (
    <div className="flex flex-wrap justify-between w-full pt-4">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <img src={couple} className="lg:-ml-24 h-full" />
      </div>
      <div className="lg:w-1/2 order-1 lg:order-2 justify-center m-auto text-center">
        <CarouselSlide
          title={"SUMMER 2020"}
          subtitle={"Part of the Neural Universe"}
          description={
            "We know how large objects will act, but things on a small scale."
          }
          buttonText={"BUY NOW"}
          secondButtonText="READ MORE"
          containerClass={"flex-wrap"}
          color={"success"}
        />
      </div>
    </div>
  );
}

export default FluidContainer;
