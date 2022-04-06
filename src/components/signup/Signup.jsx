import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";

const Signup = () => {
  const { authDispatch } = useAuth();
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
      authDispatch({ type: "USER_LOAD" });
      const res = await axios.post("/api/auth/signup", signUpData);
      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data.createdUser });
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("isLogin", true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(signUpData);
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
        <input
          placeholder="LAST NAME"
          className="bg-input"
          name="lastName"
          onChange={inputHandler}
          value={signUpData.lastName}
        />
        <input
          placeholder="EMAIL"
          className="bg-input"
          name="email"
          onChange={inputHandler}
          value={signUpData.email}
        />
        <input
          type="text"
          placeholder="PASSWORD"
          className="bg-input"
          name="password"
          onChange={inputHandler}
          value={signUpData.password}
        />
        <input
          placeholder="CONFIRM PASSWORD"
          className="bg-input"
          name="confirmPassword"
          onChange={inputHandler}
          value={signUpData.confirmPassword}
        />
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
        <button className="user-btn" type="submit">
          CREATE NEW ACCOUNT
        </button>
      </div>
    </form>
  );
};

export { Signup };
