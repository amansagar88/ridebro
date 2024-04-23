import React from "react";
import "./registration.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import basestyle from "./Base.module.css";
import "./login.css";

export default function Registration() {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };
  const LoginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("http://localhost:9002/signup/", user).then((res) => {
        alert(res.data.message);
        navigate("/login", { replace: true });
      });
    }
  }, [formErrors]);
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
            <p className={basestyle.error}>{formErrors.email}</p>
            <p className={basestyle.error}>{formErrors.password}</p>
          </div>
          <img src={require("./images/1.png")} alt="main-img" />
        </div>
      </div>
    </>
  );
}
