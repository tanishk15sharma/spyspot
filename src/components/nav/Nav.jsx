import React, { useState } from "react";
import { useFilters } from "../../contexts/filters";
import { UserLogin } from "../login/UserLogin";
import { Menu } from "../sidebar/Menu";
import "./Nav.css";
const Nav = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { filterDispatch } = useFilters();

  return (
    <nav>
      <div>
        <div className="logo">
          <i
            class="fa-solid fa-bars nav-menu-bar"
            onClick={() => setToggleMenu(true)}
          ></i>
          <Menu menuVal={toggleMenu} setMenu={() => setToggleMenu(false)} />
          SPY
          <i className="fa-brands fa-reddit"></i>SPOT
        </div>
      </div>
      <div className="search-div">
        <input
          className="search"
          placeholder="search"
          onChange={(e) =>
            filterDispatch({ type: "SEARCH_KEY", payload: e.target.value })
          }
        />
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
