import "./UserLogin.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth";
import { validLogin } from "../../utilities/auth-utils";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserLogin = ({ toggleLogin }) => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const loginRef = useRef(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();

  const inputHandler = (e) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((errors) => ({
      ...errors,
      [e.target.name]: "",
    }));
  };

  const postLoginDetails = async (email, password) => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status !== 200) return;
      setAuth({ isLoggedIn: true, encodedToken: data.encodedToken });
      toast.success(`Hello ${data.foundUser.firstName},  welcome back !`);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("Refresh and try again!");
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
    <form className="fx-center" onSubmit={handleSubmit} ref={loginRef}>
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
        <div className="flex-sb">
          <Link to="/signup">
            <span className="secondary-txt">CREATE NEW ACCOUNT</span>
          </Link>
          <button className="btn-sm" onClick={() => testHandler()}>
            TEST LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export { UserLogin };
