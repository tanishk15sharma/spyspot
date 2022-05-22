import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useFilters } from "../../contexts/filters";
import { UserLogin } from "../login/UserLogin";
import { Menu } from "../sidebar/Menu";
import toast from "react-hot-toast";

import "./Nav.css";
const Nav = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { filterDispatch } = useFilters();
  const { auth, setAuth } = useAuth();

  const logoutHandler = () => {
    setAuth({ isLoggedIn: false, encodedToken: "" });
    toast.success(`Bye bye ! see you soon`);
  };
  return (
    <nav>
      <div>
        <div className="logo">
          <i
            className="fa-solid fa-bars nav-menu-bar"
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
          <span className="material-icons search-icon">search</span>
        </div>
      </div>

      {auth.isLoggedIn ? (
        <button className="btn" onClick={() => logoutHandler()}>
          <i className="fa-solid fa-circle-user"></i>
          LOGOUT
        </button>
      ) : (
        <button className="btn" onClick={() => setToggleLogin((val) => !val)}>
          <i className="fa-solid fa-circle-user"></i>
          LOGIN
        </button>
      )}

      {toggleLogin ? (
        <UserLogin toggleLogin={() => setToggleLogin(false)} />
      ) : null}
    </nav>
  );
};

export { Nav };
