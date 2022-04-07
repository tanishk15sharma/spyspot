import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const getActiveStyleBar = ({ isActive }) => ({
    backgroundColor: isActive ? "#353535" : "",
  });

  return (
    <div className="sidebar">
      <div className="side-nav">
        <NavLink to="/" style={getActiveStyleBar} className="side-icon-div">
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">home</span>
          <p>Home</p>
          {/* </div> */}
        </NavLink>

        <NavLink
          to="/videos"
          style={getActiveStyleBar}
          className="side-icon-div"
        >
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">explore</span>
          <p>Explore</p>
          {/* </div> */}
        </NavLink>
        <NavLink
          to="/playlists"
          style={getActiveStyleBar}
          className="side-icon-div"
        >
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">create_new_folder</span>
          <p>Playlist</p>
          {/* </div> */}
        </NavLink>
        <NavLink
          to="/likes"
          style={getActiveStyleBar}
          className="side-icon-div"
        >
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">thumb_up</span>
          <p>Likes</p>
          {/* </div> */}
        </NavLink>
        <NavLink
          to="/history"
          style={getActiveStyleBar}
          className="side-icon-div"
        >
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">history</span>

          <p>History</p>
          {/* </div> */}
        </NavLink>
        <NavLink
          to="/watchlater"
          style={getActiveStyleBar}
          className="side-icon-div"
        >
          {/* <div className="side-icon-div"> */}
          <span className="material-icons side-icon">play_lesson</span>
          <p>Watch Later</p>
          {/* </div> */}
        </NavLink>
      </div>
    </div>
  );
};

export { Sidebar };
