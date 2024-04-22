import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <div className="rMain">
        <div className="mLeft">
          <h1>Welcome</h1>
          <p>You are some steps away from becoming a part of our community.</p>
          <h6>Already a registered then..</h6>
          <Link to="/" className="btn btn-primary mbutton">
            Login
          </Link>
        </div>
        <div className="mRight">
          <div className="formContainer">
            <h1>Create your account</h1>
            <form className="Rform">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Full Name*"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Mobile Number*"
              />
              <input type="email" name="email" id="email" placeholder="Email*" />
              <select>
                <option value="0">Select Gender*</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
              />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password*"
              />
              <button className="btn btn-primary mbutton">Register</button>
              {/* <img src={require("./images/register.jpg")} alt="main-img" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
