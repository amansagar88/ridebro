// App.js
// import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Body/herosection";
import Footer from "./components/footer/footer";
import Registration from "./registraction";

export default function App() {
  return(
  <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HeroSection />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}