import React, { useRef } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
const Menu = ({ menuVal, setMenu }) => {
  const menuRef = useRef(null);

  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#353535" : "",
  });

  useClickOutside(menuRef, setMenu);
  return (
    <div className={menuVal ? "menu visible" : "menu"} ref={menuRef}>
      <div className="menu-nav">
        <NavLink style={getActiveStyle} to="/" className="menu-icon-div">
          <i className="fa-solid fa-house menu-icon "></i>
          <p>Home</p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/videos" className="menu-icon-div">
          <i className="fa-solid fa-compass menu-icon "></i>
          <p>Explore</p>
        </NavLink>
        <NavLink
          style={getActiveStyle}
          to="/playlists"
          className="menu-icon-div"
        >
          <i className="fa-solid fa-folder-plus menu-icon "></i>
          <p>Playlist</p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/likes" className="menu-icon-div">
          <i className="fa-solid fa-thumbs-up menu-icon "></i>
          <p>Likes</p>
        </NavLink>
        <NavLink style={getActiveStyle} to="/history" className="menu-icon-div">
          <i className="fa-solid fa-clock-rotate-left menu-icon "></i>

          <p>History</p>
        </NavLink>
        <NavLink
          style={getActiveStyle}
          to="/watchlater"
          className="menu-icon-div"
        >
          <i className="fa-solid fa-bookmark menu-icon "></i>
          <p>Watch Later</p>
        </NavLink>
      </div>
    </div>
  );
};

export { Menu };
