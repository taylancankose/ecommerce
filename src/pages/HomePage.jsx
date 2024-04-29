import React from "react";
import Slider from "../layout/Home/Slider";
import EditorPick from "../layout/Home/EditorPick";
import FeaturedProducts from "../layout/Home/FeaturedProducts";
import bgHeader from "../assets/header-bg.png";
import carouselHeader from "../assets/bg-header-man.png";
import FluidContainer from "../layout/Home/FluidContainer";
import FeaturedBlog from "../layout/Home/FeaturedBlog";
import Categories from "../layout/Home/Categories";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Slider
        background={bgHeader}
        container="bg-primary"
        isAbsolute={true}
        title="SUMMER 2020"
        subtitle="NEW COLLECTION"
        description="We know how large objects will act, but things on a small scale."
        buttonText="SHOP NOW"
        color={"success"}
      />
      <EditorPick />
      <Categories />
      <FeaturedProducts />
      <Slider
        isAbsolute={false}
        background={carouselHeader}
        container="bg-secondary"
        price="$16.48"
        title="SUMMER 2020"
        subtitle="Vita Classic Product"
        description="We know how large objects will act, but things on a small scale."
        buttonText="SHOP NOW"
        color={"success"}
      />
      <FluidContainer />
      <FeaturedBlog />
    </div>
  );
}

export default HomePage;
