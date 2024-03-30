import React from "react";
import "./herosection.css";

export default function HeroSection() {
  return (
    <>
      <div className="main-desktop-body">
        <div className="contact-area">
          <h1>Share the Ride, Share the Future</h1>
          <p>
            Welcome to our ride-sharing platform, where convenience meets
            sustainability. Tired of battling traffic? Our efficient routes help
            you beat the rush while reducing your carbon footprint, paving the
            way for a greener future. Plus, why not turn your daily commute into
            a money-making opportunity? Earn extra cash by offering rides to
            fellow travelers. But it's not just about the savings; it's about
            building connections and a sense of community. Join us today to
            experience the benefits firsthand and embark on a journey towards a
            better tomorrow.
          </p>
          <button type="button" class="btn btn-primary">
            JOIN US FOR FREE
          </button>
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
          sustainability. Tired of battling traffic? Our efficient routes help
          you beat the rush while reducing your carbon footprint, paving the way
          for a greener future. Plus, why not turn your daily commute into a
          money-making opportunity? Earn extra cash by offering rides to fellow
          travelers. But it's not just about the savings; it's about building
          connections and a sense of community. Join us today to experience the
          benefits firsthand and embark on a journey towards a better tomorrow.
        </p>
        <button type="button" class="btn btn-primary">
          JOIN US FOR FREE
        </button>
      </div>
    </>
  );
}
