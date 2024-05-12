import React from "react";
import "./registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import basestyle from "./Base.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
  const host = "http://localhost:5000";

  // const host = "https://ridebrowithbackend.vercel.app";

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
    setUser({ ...user, [name]: value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const { name, email, number, gender, password, cpassword } = user;
    const res = await fetch(`${host}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        number,
        gender,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error('Please fill all the fields', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else if (res.status === 401) {
      toast.error('Password and Confirm Password should be Same', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else if (res.status === 800) {
      toast.error('User Already Exists', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      toast.success('User Registered successfully', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setTimeout(() => {
          navigate('/login');
        }, 2600); 
}};
  return (
    <>
      <div className={basestyle.App}>
        <div className="register">
          <form method="POST">
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
            <button className={basestyle.button_common} onClick={signupHandler}>
              Register
            </button>
          </form>
          <Link to="/login">Already registered? Login</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
