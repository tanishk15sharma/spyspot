import React, { useState } from "react";
import { UserLogin } from "../login/UserLogin";
import "./Nav.css";
const Nav = () => {
  const [toggleLogin, setToggleLogin] = useState(false);

  return (
    <nav>
      <div className="logo">
        SPY
        <i className="fa-brands fa-reddit"></i>SPOT
      </div>
      <div className="search-div">
        <input className="search" placeholder="search" />
        <div>
          <span class="material-icons search-icon">search</span>
        </div>
      </div>
      <button className="btn" onClick={() => setToggleLogin((val) => !val)}>
        <i className="fa-solid fa-circle-user"></i>
        LOGIN
      </button>

      {toggleLogin ? (
        <UserLogin toggleLogin={() => setToggleLogin(false)} />
      ) : null}

      {/* <UserLogin toggleVal={toggleLogin} setToggleVal={setToggleLogin} /> */}
    </nav>
  );
};

export { Nav };
