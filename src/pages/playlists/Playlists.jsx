import React from "react";
import { PlaylistListing } from "../../components/playlists/PlaylistListing";

import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Playlists = () => {
  return (
    <div>
      <div>
        <div>
          <Nav />
        </div>
        <Sidebar />
        <div>
          <PlaylistListing />
        </div>
      </div>
    </div>
  );
};

export { Playlists };
