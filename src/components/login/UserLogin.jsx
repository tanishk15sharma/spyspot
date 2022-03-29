import "./UserLogin.css";
import React from "react";

const UserLogin = (displayVal) => {
  console.log(displayVal);
  return (
    <form
      style={{ display: !displayVal.displayVal && "none" }}
      className="ab-center"
    >
      <div className="form-div">
        <input className="bg-input" placeholder="EMAIL" />
        <input className="bg-input" placeholder="PASSWORD" />
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
