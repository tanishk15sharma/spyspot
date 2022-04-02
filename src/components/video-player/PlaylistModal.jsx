import React, { useState, useRef } from "react";

import { useUserVideos } from "../../contexts/user-videos";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
} from "../../utilities/playlist-utils";

import "./Player.css";

const PlaylistModal = ({ video, toggleModal }) => {
  const { state } = useUserVideos();
  const [playlistTitle, setPlaylistTitle] = useState("");
  const { dispatch } = useUserVideos();
  const modalRef = useRef(null);
  const clickHandler = () => {
    if (playlistTitle === "") {
      alert("please write a name of playlist");
      return;
    }
    createPlaylist(playlistTitle, dispatch);
    setPlaylistTitle("");
  };
  useClickOutside(modalRef, toggleModal);

  return (
    <div className="a">
      <div className="ab-center" ref={modalRef}>
        <div className="line">
          {state.playlists.length === 0 ? (
            <h4 className="light-name">Create a playlist </h4>
          ) : (
            state.playlists.map((playlist) => (
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
            ))
          )}
        </div>

        <div>
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
    </div>
  );
};

export { PlaylistModal };
