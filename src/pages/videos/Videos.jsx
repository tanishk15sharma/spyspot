import React from "react";
import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { VideosListing } from "../../components/videos-listing/VideosListing";

const Videos = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="left">
        <VideosListing />
      </div>
    </div>
  );
};

export { Videos };
