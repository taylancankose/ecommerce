import React from "react";
import Header from "../layout/Header";
import EditorPick from "../layout/EditorPick";
import FeaturedProducts from "../layout/FeaturedProducts";
import Navbar from "../components/Navbar";
// import data from "../assets/data.json";
// import carouselData from "../assets/carouselData.json";
import bgHeader from "../assets/header-bg.png";
import carouselHeader from "../assets/bg-header-man.png";
import FluidContainer from "../layout/FluidContainer";
import FeaturedBlog from "../layout/FeaturedBlog";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
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
    </div>
  );
}

export default HomePage;
