import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="hamburger">
        <i className="fa-solid fa-bars side-icon"></i>
      </div>
      <div className="side-nav">
        <div className="side-icon-div">
          <i className="fa-solid fa-house-chimney side-icon"></i>
          <p>Home</p>
        </div>
        <Link to="/videos">
          <div className="side-icon-div">
            <i className="fa-regular fa-compass side-icon"></i>
            <p>Explore</p>
          </div>
        </Link>
        <Link to="/playlists">
          <div className="side-icon-div">
            <i className="fa-solid fa-folder-plus side-icon"></i>
            <p>Playlist</p>
          </div>
        </Link>
        <Link to="/likes">
          <div className="side-icon-div">
            <i className="fa-solid fa-thumbs-up side-icon"></i>
            <p>Likes</p>
          </div>
        </Link>
        <div className="side-icon-div">
          <i className="fa-solid fa-clock-rotate-left side-icon"></i>
          <p>History</p>
        </div>
        <Link to="/watchlater">
          <div className="side-icon-div">
            <i className="fa-solid fa-bookmark side-icon"></i>
            <p>Watch Later</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Sidebar };
