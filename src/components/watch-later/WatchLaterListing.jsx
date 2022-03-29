import React from "react";
import "./WatchLaterListing.css";
const WatchLaterListing = () => {
  return (
    <div className="flex">
      <div className="page-design">
        <h1>Saved videos for you , WATCH IT !</h1>
      </div>
      <div className="horiz-card">
        <div className="sm-img">
          <img />
        </div>
        <div className="horiz-infos">
          <p>video details will be here</p>
          <div>type of video</div>
        </div>
      </div>
    </div>
  );
};

export { WatchLaterListing };
