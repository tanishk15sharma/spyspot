import React, { useState } from "react";
import "./AddPlaylist.css";
const AddPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");

  return (
    <div className="ab-center">
      <input
        value={playlistName}
        className="bg-input"
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Playlist name"
      />
      <button className="btn-input">ADD</button>
    </div>
  );
};

export { AddPlaylist };
