import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
} from "../../utilities/playlist-utils";

import "./Player.css";

const PlaylistModal = ({ video }) => {
  const { state } = useUserVideos();
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { dispatch } = useUserVideos();

  const clickHandler = () => {
    if (playlistTitle === "") {
      alert("please write a name of playlist");
      return;
    }
    createPlaylist(playlistTitle, dispatch);
  };

  return (
    <div>
      <div className="ab-center">
        <div className="line">
          {state.playlists.map((playlist) => (
            <div key={playlist._id}>
              <div className="playlist-head">
                <div className="light-name">
                  <input
                    type="checkbox"
                    className="margin-rt"
                    onChange={() =>
                      addVideoToPlaylist(playlist._id, video, dispatch)
                    }
                  />
                  {playlist.title}
                </div>
                <div>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deletePlaylist(playlist._id, dispatch)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <input
          value={playlistTitle}
          className="bg-input"
          onChange={(e) => setPlaylistTitle(e.target.value)}
          placeholder="Playlist name"
        />
        <button className="btn-input" onClick={() => clickHandler()}>
          ADD
        </button>
      </div>
    </div>
  );
};

export { PlaylistModal };
