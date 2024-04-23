// App.js
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Body/herosection";
import Footer from "./components/footer/footer";
import Registration from "./registraction";
import Login from "./login";
import Createride from "./createride";
import Searchride from "./searchride";

export default function App() {
  return(
  <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/"  element={<HeroSection />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createride" element={<Createride />} />
        <Route path="/searchride" element={<Searchride />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}