import axios from "axios";
import React, { useState, useEffect } from "react";
import { SuggestionChips } from "./SuggestionChips";
import { VideoCard } from "./VideoCard";
import "./VideosListing.css";
const VideosListing = () => {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/videos");
        setVideosData(data.videos);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(videosData);
  return (
    <div className="hero-div">
      <SuggestionChips />
      <div className="videos-wrapper">
        {videosData.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};

export { VideosListing };
