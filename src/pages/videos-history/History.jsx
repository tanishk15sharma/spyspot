import React from "react";
import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { HistoryVideos } from "../../components/videos-history/HistoryVideos";

const History = () => {
  return (
    <div>
      <div>
        <Nav />
        <Sidebar />
        <div>
          <HistoryVideos />
        </div>
      </div>
    </div>
  );
};

export { History };
