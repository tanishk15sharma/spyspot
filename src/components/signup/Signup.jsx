import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { validSignUp } from "../../utilities/auth-utils";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { setAuth } = useAuth();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [signUpErrors, setSignUpErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const inputHandler = (e) => {
    if (e.target.value === "checkbox") {
      setSignUpData((signUpData) => ({
        ...signUpData,
        [e.target.id]: e.target.checked,
      }));
    }

    setSignUpData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setSignUpErrors((errData) => ({
      ...errData,
      [e.target.name]: "",
    }));
  };

  const postSignUpDetails = async (e) => {
    try {
      e.preventDefault();
      const { isValid, errors } = validSignUp(signUpData, signUpErrors);
      if (!isValid) {
        setSignUpErrors(errors);
        return;
      }
      const { data, status } = await axios.post("/api/auth/signup", signUpData);
      if (status !== 201) return;
      console.log(data);
      setAuth({ isLoggedIn: true, encodedToken: data.encodedToken });
      toast.success(
        `Hello ${data.createdUser.firstName},  welcome to spyspot !`
      );

      navigate(from, { replace: true });
    } catch (err) {
      err.response.status === 422
        ? toast.error("Email already exists")
        : toast.error("try again!");
    }
  };

  return (
    <form className="fx-center" onSubmit={postSignUpDetails}>
      <div className="form-div">
        <input
          placeholder="FIRST NAME"
          className="bg-input"
          name="firstName"
          onChange={inputHandler}
          value={signUpData.firstName}
        />
        {signUpErrors.firstName && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.firstName}
          </span>
        )}
        <input
          placeholder="LAST NAME"
          className="bg-input"
          name="lastName"
          onChange={inputHandler}
          value={signUpData.lastName}
        />

        {signUpErrors.lastName && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.lastName}
          </span>
        )}

        <input
          placeholder="EMAIL"
          className="bg-input"
          name="email"
          onChange={inputHandler}
          value={signUpData.email}
        />

        {signUpErrors.email && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.email}
          </span>
        )}

        <input
          type="text"
          placeholder="PASSWORD"
          className="bg-input"
          name="password"
          onChange={inputHandler}
          value={signUpData.password}
        />

        {signUpErrors.password && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.password}
          </span>
        )}

        <input
          placeholder="CONFIRM PASSWORD"
          className="bg-input"
          name="confirmPassword"
          onChange={inputHandler}
          value={signUpData.confirmPassword}
        />

        {signUpErrors.confirmPassword && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.confirmPassword}
          </span>
        )}

        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={signUpData.terms}
            onChange={inputHandler}
          />{" "}
          <label htmlFor="terms">I accept all Terms & Conditions</label>
        </div>

        {signUpErrors.terms && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.terms}
          </span>
        )}

        <button className="user-btn" type="submit">
          CREATE NEW ACCOUNT
        </button>
      </div>
    </form>
  );
};

export { Signup };
