import React from "react";
import "./registration.css";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registration() {

  const host = "http://localhost:5000"

  // const host = "https://ridebrowithbackend.vercel.app/";

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }

  const signupHandler = async (e) => {
    e.preventDefault();
    const {name, email, number, gender, password, cpassword} = user;
    const res = await fetch( `${host}/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, number, gender, password, cpassword})
    });

    const data = await res.json();

    if(data.status === 422){
      window.alert("Invalid details");
    }else if(data.status === 401){
      window.alert("password ans confirm password  does not match")
    }else if(data.status === 800){
      window.alert("user already exist");
    }else{
      window.alert("Registration Successful!");
      navigate('/login');
    }
  }
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
            <form method="POST" className="Rform">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name*"
                onChange={changeHandler}
                value={user.name}
              />
              <input
                type="text"
                name="number"
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
              name="gender"
              id="gender"
              onChange={changeHandler}
              value={user.gender}
              >
                <option value="0">Select Gender*</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
          </div>
        </div>
      </div>
    </>
  );
}
