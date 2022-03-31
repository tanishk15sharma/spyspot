import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { createPlaylist } from "../../utilities/playlist-utils";
import "./AddPlaylist.css";
const AddPlaylist = () => {
  const { dispatch } = useUserVideos();
  const [playlistName, setPlaylistName] = useState("");
  const clickHandler = () => {
    if (playlistName === "") {
      alert("please write a name of playlist");
      return;
    }
    createPlaylist(playlistName, dispatch);
  };
  return (
    <div className="ab-center">
      <input
        value={playlistName}
        className="bg-input"
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Playlist name"
      />
      <button className="btn-input" onClick={() => clickHandler()}>
        ADD
      </button>
    </div>
  );
};

export { AddPlaylist };
