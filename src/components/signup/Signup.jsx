import React, { useState } from "react";

const Signup = () => {
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
  console.log(signUpData);
  return (
    <form className="fx-center">
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
        <button className="user-btn">CREATE NEW ACCOUNT</button>
      </div>
    </form>
  );
};

export { Signup };
