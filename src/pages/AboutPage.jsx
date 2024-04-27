import React, { useState } from "react";
import AboutHeader from "../layout/About/AboutHeader";
import AboutContent from "../layout/About/AboutContent";
import VideoPlayer from "../layout/About/VideoPlayer";
import Testimonials from "../layout/About/Testimonials";
import Companies from "../layout/About/Companies";

function AboutPage() {
  const [play, setPlay] = useState(false);
  return (
    <div className="font-montserrat">
      <AboutHeader />

      <div className="md:py-10">
        <AboutContent />
      </div>

      {/* VideoPlayer */}
      <div className="md:pb-20 mb-24 ">
        <VideoPlayer play={play} setPlay={setPlay} />
      </div>

      {/* Testimonials */}
      <div>
        <Testimonials />
      </div>
      {/* Companies */}
      <div className="flex flex-wrap text-center justify-between items-center  flex-col  md:py-14 bg-bgGray">
        <Companies />
      </div>
    </div>
  );
}

export default AboutPage;
