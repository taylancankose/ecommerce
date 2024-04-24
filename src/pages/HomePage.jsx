import React from "react";
import Header from "../layout/Header";
import EditorPick from "../layout/EditorPick";
import FeaturedProducts from "../layout/FeaturedProducts";
// import data from "../assets/data.json";
// import carouselData from "../assets/carouselData.json";
import bgHeader from "../assets/header-bg.png";
import carouselHeader from "../assets/bg-header-man.png";
import FluidContainer from "../layout/FluidContainer";
import FeaturedBlog from "../layout/FeaturedBlog";
import logo from "../assets/logo-no-bg.png";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header
        background={bgHeader}
        container="bg-primary"
        isAbsolute={true}
        title="SUMMER 2020"
        subtitle="NEW COLLECTION"
        description="We know how large objects will act, but things on a small scale."
        buttonText="SHOP NOW"
      />
      {/* <Header data={data} /> */}
      <EditorPick />
      <FeaturedProducts />
      <Header
        isAbsolute={false}
        background={carouselHeader}
        container="bg-secondary"
        price="$16.48"
        title="SUMMER 2020"
        subtitle="Vita Classic Product"
        description="We know how large objects will act, but things on a small scale."
        buttonText="SHOP NOW"
      />
      <FluidContainer />
      <FeaturedBlog />
      <div className="md:p-20 p-10 md:flex justify-between bg-bgGray">
        <img src={logo} className="h-14 md:ml-10 mb-4 md:mb-0" />
        <div className="flex items-center text-primary text-3xl md:mr-10">
          <i className="fa-brands fa-facebook md:mr-8 mr-2"></i>
          <i className="fa-brands fa-twitter md:mr-8 mr-2"></i>
          <i className="fa-brands fa-instagram "></i>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
