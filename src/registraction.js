import React from "react";
import "./registration.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import basestyle from "./Base.module.css";

export default function Registration() {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
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
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
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
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
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
          <h6>Already a registered then..</h6>
          <Link to="/login" className="btn btn-primary mbutton">
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
                onChange={changeHandler}
                value={user.fname}
              />
              <input
                type="text"
                name="numer"
                id="number"
                placeholder="Mobile Number*"
                onChange={changeHandler}
                value={user.number}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                onChange={changeHandler}
                value={user.email}
              />
              <select
              onChange={changeHandler}
              value={user.gender}
              >
                <option value="0">Select Gender*</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password*"
                onChange={changeHandler}
                value={user.password}
              />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password*"
                onChange={changeHandler}
                value={user.cpassword}
              />
              <button
                className="btn btn-primary mbutton"
                onClick={signupHandler}
              >
                Register
              </button>
            </form>
            <p className={basestyle.error}>{formErrors.fname}</p>
            <p className={basestyle.error}>{formErrors.email}</p>
            <p className={basestyle.error}>{formErrors.password}</p>
            <p className={basestyle.error}>{formErrors.cpassword}</p>
          </div>
        </div>
      </div>
    </>
  );
}
