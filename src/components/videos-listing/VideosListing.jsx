import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFilters } from "../../contexts/filters";
import { useUserVideos } from "../../contexts/user-videos";
import { getFilteredVideos } from "../../utilities/filters-utils";
import { SuggestionChips } from "./SuggestionChips";
import { VideoCard } from "./VideoCard";
import "./VideosListing.css";
const VideosListing = () => {
  const { filterState } = useFilters();
  const { state } = useUserVideos();

  const filteredVideos = getFilteredVideos(
    state.allVideos,
    filterState.category
  );

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
