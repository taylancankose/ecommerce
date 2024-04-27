import React from "react";
import ContentLoader from "react-content-loader";

function SingleLine(props) {
  return (
    <ContentLoader
      speed={2}
      width={476}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#f0e0e0"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="-2" y="4" rx="3" ry="3" width="186" height="30" />
      <rect x="1" y="125" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  );
}

export default SingleLine;
