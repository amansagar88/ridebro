// App.js
// import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Body/herosection";
import Footer from "./components/footer/footer";

export default function App() {
  return(
  <>
    <NavBar />
    <HeroSection />
    <Footer />
  </>
  );
}