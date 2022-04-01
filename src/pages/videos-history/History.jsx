import React from "react";
import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { HistoryVideos } from "../../components/videos-history/HistoryVideos";

const History = () => {
  return (
    <div>
      <div>
        <div className="left">
          <Nav />
        </div>
        <Sidebar />
        <div className="left">
          <HistoryVideos />
        </div>
      </div>
    </div>
  );
};

export { History };
