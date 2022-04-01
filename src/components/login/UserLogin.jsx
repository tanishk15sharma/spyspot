import "./UserLogin.css";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { validLogin } from "../../utilities/auth-utils";

const UserLogin = (displayVal) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const { authState, authDispatch } = useAuth();

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
      console.log(data);
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

  const testHandler = () => {
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };
  return (
    <form
      style={{ display: !displayVal.displayVal && "none" }}
      className="ab-center"
      onSubmit={handleSubmit}
    >
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
          <button className="btn-sm" onClick={testHandler}>
            TEST LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export { UserLogin };
