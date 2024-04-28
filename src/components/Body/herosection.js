"use client";
import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.js";

export default function HeroSection() {
  return (
    <>
      <div className="main-desktop-body">
        <div className="contact-area">
          <h1>Share the Ride, Share the Future</h1>
          <p>
            Welcome to our ride-sharing platform, where convenience meets
            sustainability. Tired of battling traffic? Why not use our platform
            to share empty seats of your vehicle which help you generate some
            side money too.Join us today to experience the benefits firsthand
            and embark on a journey towards a better tomorrow.
          </p>
          <Link to="/registration">
            <button type="button" className="btn btn-primary">
              JOIN US FOR FREE
            </button>
          </Link>
        </div>
        <div className="img-area">
          <img src={require("./images/main.jpg")} alt="main-img" />
        </div>
      </div>
      {/* for mobile view */}
      <div className="mobile-contant-area">
        <h3>Share the Ride, Share the Future</h3>
        <p>
          Welcome to our ride-sharing platform, where convenience meets
          sustainability. Tired of battling traffic? Why not use our platform to
          share empty seats of your vehicle which help you generate some side
          money too.Join us today to experience the benefits firsthand and
          embark on a journey towards a better tomorrow.
        </p>
        <Link to="/registration" className="btn btn-primary mbutton">
          JOIN US FOR FREE
        </Link>
      </div>
      <div className="aboutMain">
      <div className="aboutRight">
          <div className="upper_image">
            <div className="about_image" id="first_image">
              <img src={require("./images/firstimage.jpeg")} alt="main-img" />
            </div>
            <div className="about_image" id="second_imgage">
              <img src={require("./images/secondimage.jpeg")} alt="main-img" />
            </div>
          </div>
          <div className="about_image" id="third_image">
            <img src={require("./images/thirdimage.jpeg")} alt="main-img" />
          </div>
        </div>
        <div className="aboutLeft">
          <h1>Safety for all</h1>
          <p>
            At Ride Bro the well-being of our customers is above everything
            else. We are constantly in pursuit of enhancing our safety measures
            to ensure every ride is a pleasant and comfortable experience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
