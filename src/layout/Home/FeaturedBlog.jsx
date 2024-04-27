import React from "react";
import BlogPost from "../../components/Posts/BlogPost";

function FeaturedBlog() {
  return (
    <div className="py-10 w-full font-montserrat">
      {/* Title */}
      <div className="py-10 w-full flex flex-col text-center justify-center items-center">
        <h4 className="font-bold leading-5 tracking-[0.2px] text-primary ">
          Practice Advice
        </h4>
        <h3 className="font-bold text-4xl leading-8 tracking-[0.1px] text-headerColor my-3 ">
          Featured Posts
        </h3>
        <p className="tracking-[0.2px] leading-5 font-normal text-secondTextColor md:w-2/6 mt-1 mx-1 md:mx-0">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Blog Posts */}
      <div className="flex flex-wrap justify-center items-center pt-10 h-full w-full">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  );
}

export default FeaturedBlog;
