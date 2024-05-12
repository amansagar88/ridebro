import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Body/herosection";
import Registration from "./registraction";
import Login from "./login";
import Createride from "./createride";
import Searchride from "./searchride";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const host = "http://localhost:5000";
  const [username, setUserName] = useState(null);
  const [useremail, setUseremail] = useState(null);
  const [usernumber, setUsernumber] = useState(null);


  useEffect(() => {
    const jwtFromStorage = localStorage.getItem("token");
    if (jwtFromStorage) {
      setIsLoggedIn(true);
      getuser(jwtFromStorage);
  } else {
    setIsLoggedIn(false);
  }
  }, []);

  const getuser = async (token) => {
    const res = await fetch(`${host}/user`, {
      method: "POST",
      headers: {
        Accept : "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .then((data) => {
        setUserName(data.name);
        setUseremail(data.email);
        setUsernumber(data.number)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<HeroSection isLoggedIn={isLoggedIn} username={username}/>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
          <Route path="/createride" element={<Createride username={username} useremail={useremail} usernumber={usernumber}/>}/>
          <Route path="/searchride" element={<Searchride />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
