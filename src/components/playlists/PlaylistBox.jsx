import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos";
import { deletePlaylist } from "../../utilities/playlist-utils";

const PlaylistBox = ({ playlist }) => {
  const [togglePlaylistBox, setTogglePlaylistBox] = useState(false);
  const { dispatch } = useUserVideos();

  return (
    <div>
      <div
        className="playlist-box"
        key={playlist._id}
        onClick={() => {
          setTogglePlaylistBox(!togglePlaylistBox);
        }}
      >
        <div className="playlist-head">
          <h1>{playlist.title}</h1>
          <div>
            <i
              className="fa-regular fa-trash-can"
              onClick={() => deletePlaylist(playlist._id, dispatch)}
            ></i>
            <i
              className={
                togglePlaylistBox
                  ? "fa-solid fa-caret-down rotate-up"
                  : "fa-solid fa-caret-down"
              }
            ></i>
          </div>
        </div>
      </div>
      <div className={togglePlaylistBox ? "show-box" : "playlist-videos-box"}>
        {playlist.videos.length === 0 ? (
          <h2>No items in your playlist</h2>
        ) : (
          playlist.videos?.map((video) => {
            return (
              <div className="like-card" key={video._id}>
                <div className="like-img-div">
                  <img
                    src={`https://i.ytimg.com/vi/${video._id}/maxresdefault.jpg`}
                    className="like-thumbnail"
                  />
                </div>
                <div className="like-options">
                  <div className="like-title">{video.title}</div>
                  <i className="fa-regular fa-trash-can"></i>
                </div>
                <div className="like-type">{video.category}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export { PlaylistBox };
