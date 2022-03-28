import React, { useState } from "react";
import img from "../../../src/components/hq720.webp";
import "./VideoCard.css";
const VideoCard = () => {
  const [toggleOptions, setToggleOptions] = useState(false);
  return (
    <div className="video-card relative">
      <div className="video-img-div">
        <img src={img} className="video-thumbnail" />
      </div>
      <div className="pd-sm flex-sb">
        <div className="video-title">TANISHK is looking winnerr in</div>
        <i
          class="fa-solid fa-ellipsis-vertical"
          onClick={() => setToggleOptions((val) => !val)}
        ></i>
      </div>
      <div
        className="video-options"
        style={{ display: !toggleOptions && "none" }}
      >
        <div className="option">
          <i class="fa-solid fa-clock-rotate-left margin-r-sm"></i>
          Save to Watch Later
        </div>
        <div className="option">
          <i class="fa-solid fa-thumbs-up margin-r-sm"></i>
          Like Video
        </div>
      </div>
      <div className="pd-sm video-type">Dunk</div>
    </div>
  );
};

export { VideoCard };
