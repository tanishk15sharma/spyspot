import React, { useRef } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
const Menu = ({ menuVal, setMenu }) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, setMenu);
  return (
    <div className={menuVal ? "menu visible" : "menu"} ref={menuRef}>
      <div className="menu-nav">
        <Link to="/">
          <div className="menu-icon-div">
            <i class="fa-solid fa-house menu-icon "></i>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/videos">
          <div className="menu-icon-div">
            <i class="fa-solid fa-compass menu-icon "></i>
            <p>Explore</p>
          </div>
        </Link>
        <Link to="/playlists">
          <div className="menu-icon-div">
            <i class="fa-solid fa-folder-plus menu-icon "></i>
            <p>Playlist</p>
          </div>
        </Link>
        <Link to="/likes">
          <div className="menu-icon-div">
            <i class="fa-solid fa-thumbs-up menu-icon "></i>
            <p>Likes</p>
          </div>
        </Link>
        <Link to="/history">
          <div className="menu-icon-div">
            <i class="fa-solid fa-clock-rotate-left menu-icon "></i>

            <p>History</p>
          </div>
        </Link>
        <Link to="/watchlater">
          <div className="menu-icon-div">
            <i class="fa-solid fa-bookmark menu-icon "></i>
            <p>Watch Later</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Menu };
