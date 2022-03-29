import React, { useState } from "react";
import { UserLogin } from "../login/UserLogin";
import "./Nav.css";
const Nav = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  console.log(toggleLogin);
  return (
    <nav>
      <div className="logo">
        SPY
        <i className="fa-brands fa-reddit"></i>SPOT
      </div>
      <div className="search-div">
        <input className="search" placeholder="search" />
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <button className="btn" onClick={() => setToggleLogin((val) => !val)}>
        LOGIN
        <i className="fa-solid fa-circle-user"></i>
      </button>
      <UserLogin displayVal={toggleLogin} />
    </nav>
  );
};

export { Nav };
