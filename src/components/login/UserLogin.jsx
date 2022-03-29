import "./UserLogin.css";
import React, { useState } from "react";
import axios from "axios";

const UserLogin = (displayVal) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((errors) => ({
      ...errors,
      [e.target.name]: "",
    }));
  };

  const postLoginDetails = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginDetails(loginData.email, loginData.password);
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
        <input
          className="bg-input"
          placeholder="PASSWORD"
          name="password"
          value={loginData.password}
          onChange={inputHandler}
        />
        <button className="user-btn">Login</button>
        <div>
          <span className="secondary-txt">CREATE NEW ACCOUNT</span>
          <button className="btn-sm">TEST LOGIN</button>
        </div>
      </div>
    </form>
  );
};

export { UserLogin };
