import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import { getFilteredVideos } from "../../utilities/filters-utils";
import { SuggestionChips } from "./SuggestionChips";
import { VideoCard } from "./VideoCard";
import "./VideosListing.css";
const VideosListing = () => {
  const [videosData, setVideosData] = useState([]);
  const { filterState } = useFilters();

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
  const filteredVideos = getFilteredVideos(videosData, filterState.category);
  console.log(filteredVideos);
  return (
    <div className="hero-div">
      <SuggestionChips />
      <div className="videos-wrapper">
        {filteredVideos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};

export { VideosListing };
