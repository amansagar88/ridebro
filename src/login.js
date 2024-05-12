import React from "react";
import "./registration.css";
import basestyle from "./Base.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(isLoggedIn) {
  const host = "http://localhost:5000";

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = async (e) => {
    e.preventDefault();
    if (isLoggedIn.isLoggedIn) {
      localStorage.clear();
      window.location.href = "/createride";
    } else {
      const res = await fetch(`${host}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      if (res.status === 400 || !data) {
        toast.error('Invalid Email Id or Password', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } else {
        if (res.status === 200) {
          // Save the auth token and redirect
          console.log(data);
          const { token } = data;
          localStorage.setItem("token", token);
          toast.success('Logged In Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
              navigate('/');
              window.location.reload();
            }, 2500); 
        } else {
          toast.error('Something Went wrong please try again', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      }
    }
  };

  return (
    <>
    <div className={basestyle.App}>
      <div className="login">
        <form method="POST">
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={basestyle.button_common} onClick={LoginHandler}>
            Login
          </button>
        </form>
        <Link to="/registration">Not yet registered? Register Now</Link>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}
