import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { deletePlaylist } from "../../utilities/playlist-utils";
import "./PlaylistModal.css";

const PlaylistModal = () => {
  const { state } = useUserVideos();
  const [playlistTitle, setPlaylistTitle] = useState("");
  return (
    <div>
      <div className="ab-center">
        <div className="line">
          {state.playlists.map((playlist) => (
            <div key={playlist._id}>
              <div className="playlist-head">
                <div className="light-name">
                  <input type="checkbox" className="margin-rt" />
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
        <button className="btn-input">ADD</button>
      </div>
    </div>
  );
};

export { PlaylistModal };
