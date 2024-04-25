import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ play, setPlay }) {
  return (
    <div className="items-center justify-center flex relative ">
      {!play && (
        <button
          className="absolute  bg-primary md:w-24 md:h-24 h-12 w-12 rounded-full flex justify-center items-center shadow-md z-10"
          onClick={() => setPlay(true)}
        >
          <i className="fa-solid fa-play text-white md:text-4xl text-2xl"></i>
        </button>
      )}
      <ReactPlayer
        width="60%"
        height="60%"
        url={"/src/assets/video-content.mp4"}
        playing={play}
        controls={play}
      />
    </div>
  );
}

export default VideoPlayer;
