import React from "react";
import blog from "../../assets/blog.png";

function BlogPost() {
  return (
    <div className="w-11/12 md:w-2/5 lg:w-1/5 border shadow-md md:mr-4 font-montserrat mb-4">
      {/* Blog Image */}
      <div className="relative">
        <div className="py-2 px-3 rounded bg-error absolute top-5 left-5">
          <h6 className="font-bold text-sm leading-6 tracking-[0.2px] text-white text-center">
            NEW
          </h6>
        </div>
        <img src={blog} className="h-1/6 " />
      </div>
      <div className="m-6">
        {/* Keywords */}
        <div className="flex items-center mb-4">
          <p className="font-normal text-xs tracking-[0.2px] text-primary mr-4">
            Google
          </p>
          <p className="font-normal text-xs tracking-[0.2px] text-secondTextColor mr-4">
            Trending
          </p>
          <p className="font-normal text-xs tracking-[0.2px] text-secondTextColor">
            New
          </p>
        </div>
        <h4 className="font-medium text-xl tracking-[0.2px] text-headerColor">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <h5 className="text-secondTextColor font-normal my-2 tracking-[0.2px] text-sm">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </h5>
        {/* Post Data */}
        <div className="flex items-center justify-between my-5">
          <div className="flex items-center">
            <i className="fa-regular fa-calendar-days text-primary mr-2"></i>
            <p className="text-secondTextColor font-normal text-xs tracking-[0.2px]">
              22 April 2021
            </p>
          </div>
          <div className="flex items-center">
            <i className="fa-regular fa-comment text-secondary mr-2"></i>
            <p className="text-secondTextColor font-normal text-xs tracking-[0.2px]">
              22 April 2021
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="flex items-center justify-start">
          <h6 className="text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px] mr-2">
            Learn More
          </h6>
          <i className="fa-solid fa-chevron-right text-primary"></i>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
