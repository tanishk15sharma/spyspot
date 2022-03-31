import React, { useState } from "react";

import "./PlaylistListing.css";
const PlaylistListing = () => {
  const [toggleBox, setToggleBox] = useState(false);
  let video = {
    title: "aaa",
    category: "3 pointer",
    _id: "1212132",
  };
  return (
    <div className="playlists-wrapper">
      <div className="playlist-container">
        <div className="playlist-box" onClick={() => setToggleBox(!toggleBox)}>
          <h1>DUNKS</h1>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className={toggleBox ? "show-box" : "playlist-videos-box"}>
          <div>
            {/* {state.likes.map((video) => ( */}
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

            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistListing };
