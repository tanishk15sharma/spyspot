import "./UserLogin.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { validLogin } from "../../utilities/auth-utils";
import { useClickOutside } from "../../hooks/useClickOutside";

const UserLogin = ({ toggleLogin }) => {
  const loginRef = useRef(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const { authDispatch } = useAuth();

  const inputHandler = (e) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((errors) => ({
      ...errors,
      [e.target.name]: "",
    }));
  };

  const postLoginDetails = async (email, password) => {
    try {
      authDispatch({ type: "USER_LOAD" });

      const { data } = await axios.post("/api/auth/login", { email, password });

      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data.foundUser });
      localStorage.setItem("token", data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validLogin(loginData, loginErrors);
    if (!isValid) {
      setLoginErrors(errors);
      return;
    }

    postLoginDetails(loginData.email, loginData.password);
  };

  useClickOutside(loginRef, toggleLogin);

  const testHandler = () => {
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };
  return (
    <form className="ab-center" onSubmit={handleSubmit} ref={loginRef}>
      <div className="form-div">
        <input
          className="bg-input"
          placeholder="EMAIL"
          name="email"
          value={loginData.email}
          onChange={inputHandler}
        />
        {loginErrors.email && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.email}
          </span>
        )}
        <input
          className="bg-input"
          placeholder="PASSWORD"
          name="password"
          value={loginData.password}
          onChange={inputHandler}
        />
        {loginErrors.password && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.password}
          </span>
        )}
        <button className="user-btn">Login</button>
        <div>
          <span className="secondary-txt">CREATE NEW ACCOUNT</span>
          <button
            className="btn-sm"
            onClick={() => {
              testHandler();
              setToggleVal(false);
            }}
          >
            TEST LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export { UserLogin };
