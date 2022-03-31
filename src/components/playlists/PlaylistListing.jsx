import React, { useState } from "react";
import { useUserVideos } from "../../contexts/user-videos.jsx";
import { AddPlaylist } from "./AddPlaylist.jsx";
import "./PlaylistListing.css";
const PlaylistListing = () => {
  const { state } = useUserVideos();
  const [toggleBox, setToggleBox] = useState(false);
  const [toggleInputBox, setToggleInputBox] = useState(false);

  let video = {
    title: "aaa",
    category: "3 pointer",
    _id: "1212132",
  };

  return (
    <div>
      <div className="playlists-wrapper">
        <button
          className="btn"
          onClick={() => setToggleInputBox(!toggleInputBox)}
        >
          <i className="fa-regular fa-square-plus"></i>
          CREATE PLAYLIST
        </button>
        {toggleInputBox ? <AddPlaylist /> : ""}
        {state.playlists.map((playlist) => (
          <div className="playlist-box" key={playlist._id}>
            <div key={video._id}>
              <div
                className="playlist-head"
                onClick={() => setToggleBox(!toggleBox)}
              >
                <h1>{playlist.title}</h1>
                <div>
                  <i
                    className="fa-regular fa-trash-can"
                    onClick={() => console.log("hogya")}
                  ></i>
                  <i
                    className={
                      toggleBox
                        ? "fa-solid fa-caret-down rotate-up"
                        : "fa-solid fa-caret-down"
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={toggleBox ? "show-box" : "playlist-videos-box"}>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistListing };
