import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f0e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="51" y="416" rx="2" ry="2" width="140" height="10" />
    <rect x="5" y="8" rx="2" ry="2" width="240" height="400" />
    <rect x="83" y="431" rx="2" ry="2" width="70" height="10" />
    <rect x="49" y="446" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
);

export default ProductLoader;
