import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos.jsx";
import { AddPlaylist } from "./AddPlaylist.jsx";
import { PlaylistBox } from "./PlaylistBox.jsx";
import "./PlaylistListing.css";
const PlaylistListing = () => {
  const { state } = useUserVideos();
  const [toggleInputBox, setToggleInputBox] = useState(false);

  return (
    <>
      <div className="playlists-wrapper">
        <button
          className="btn"
          onClick={() => setToggleInputBox(!toggleInputBox)}
        >
          <i className="fa-regular fa-square-plus"></i>
          CREATE PLAYLIST
        </button>
        {toggleInputBox ? (
          <AddPlaylist toggleInput={() => setToggleInputBox(false)} />
        ) : null}
        <div>
          {state.playlists.map((playlist) => (
            <PlaylistBox playlist={playlist} key={playlist._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export { PlaylistListing };
