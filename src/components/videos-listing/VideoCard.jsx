import React from "react";
import img from "../../../src/components/hq720.webp";
import "./VideoCard.css";
const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-img-div">
        <img src={img} className="video-thumbnail" />
      </div>
      <div className="pd-sm flex-sb">
        <div className="video-title">TANISHK is looking winnerr in</div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="pd-sm video-type">Dunk</div>
    </div>
  );
};

export { VideoCard };
