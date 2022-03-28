import React from "react";
import { SuggestionChips } from "./SuggestionChips";
import { VideoCard } from "./VideoCard";
import "./VideosListing.css";
const VideosListing = () => {
  return (
    <div className="hero-div">
      <SuggestionChips />
      <div className="videos-wrapper">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export { VideosListing };
