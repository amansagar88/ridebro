import React from "react";
import "./registration.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

export default function Registration() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {

  }

  const LoginHandler = (e) => {
    
  }

  return (
    <>
      <div className="rMain">
        <div className="mLeft">
          <h1>Welcome</h1>
          <p>You are some steps away from becoming a part of our community.</p>
          <h6>New Here...</h6>
          <Link to="/registration" className="btn btn-primary mbutton">
            Sign Up
          </Link>
        </div>
        <div className="mRight Lright">
          <div className="formContainer">
            <div className="LHeader">
              <h1 id="header">Login</h1>
            </div>
            <form className="Lform">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                onChange={changeHandler}
                value={user.email}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                onChange={changeHandler}
                value={user.password}
              />
              <button
                className="btn btn-primary mbutton"
                onClick={LoginHandler}
              >
                Login
              </button>
            </form>
          </div>
          <img src={require("./images/1.png")} alt="main-img" />
        </div>
      </div>
      <div className="mobile_link">
        <h4>Already have an account.</h4>
        <Link to="/registration" className="btn btn-primary mbutton">
          Register
        </Link>
      </div>
    </>
  );
}
