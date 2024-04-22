import React from "react";
import Header from "../layout/Header";
import EditorPick from "../layout/EditorPick";
import FeaturedProducts from "../layout/FeaturedProducts";

function HomePage() {
  return (
    <div>
      <Header />
      <EditorPick />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
