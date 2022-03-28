import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        SPY
        <i class="fa-brands fa-reddit"></i>SPOT
      </div>
      <div className="search-div">
        <input className="search" placeholder="search" />
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          {/* <i class="fa-solid fa-microphone-lines"></i> */}
        </div>
      </div>
      <button className="btn">
        LOGIN
        <i class="fa-solid fa-circle-user"></i>
      </button>
    </nav>
  );
};

export { Nav };
