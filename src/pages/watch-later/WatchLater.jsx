import React from "react";
import { WatchLaterListing } from "../../components/watch-later/WatchLaterListing";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Nav } from "../../components/nav/Nav";

const WatchLater = () => {
  return (
    <div>
      <div>
        <Nav />
        <Sidebar />
        <div>
          <WatchLaterListing />
        </div>
      </div>
    </div>
  );
};

export { WatchLater };
