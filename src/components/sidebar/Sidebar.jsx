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
          <span class="material-icons side-icon">home</span>
          <p>Home</p>
        </div>
        <Link to="/videos">
          <div className="side-icon-div">
            <span class="material-icons side-icon">explore</span>
            <p>Explore</p>
          </div>
        </Link>
        <Link to="/playlists">
          <div className="side-icon-div">
            <span class="material-icons side-icon">create_new_folder</span>
            <p>Playlist</p>
          </div>
        </Link>
        <Link to="/likes">
          <div className="side-icon-div">
            <span class="material-icons side-icon">thumb_up</span>
            <p>Likes</p>
          </div>
        </Link>
        <Link to="/history">
          <div className="side-icon-div">
            <span class="material-icons side-icon">history</span>

            <p>History</p>
          </div>
        </Link>
        <Link to="/watchlater">
          <div className="side-icon-div">
            <span class="material-icons side-icon">play_lesson</span>
            <p>Watch Later</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Sidebar };
