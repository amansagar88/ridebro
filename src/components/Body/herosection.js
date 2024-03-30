import React from "react";
import "./herosection.css";

export default function HeroSection() {
  return (
    <>
      <div className="main-desktop-body">
        <div className="contact-area">
          <h1>Share the Ride, Share the Future</h1>
          <p>
            Welcome to our innovative ride-sharing platform, where we're
            revolutionizing the way you commute. Say goodbye to the frustrations
            of traffic congestion and hello to a better, more efficient future.
            By choosing to carpool, you're not only easing the burden on our
            roadways but also actively contributing to a reduction in pollution,
            creating a cleaner environment for all. Imagine a world where every
            journey counts, where every shared ride makes a tangible difference.
            Join our community today and become a part of this movement towards
            sustainability. But the benefits don't stop there by sharing your
            commute, you're not only saving money on fuel and tolls but also
            earning extra income. Let's work together to build a brighter
            tomorrow, one ride at a time. Join us and discover the joys of
            shared transportation while making a positive impact on our planet.
            Your journey towards a greener future starts here.
          </p>
          <button type="button" class="btn btn-primary">
            JOIN US FOR FREE
          </button>
        </div>
        <div className="img-area">
          <img src={require("./images/main-img.png")} alt="main-img" />
        </div>
      </div>
      {/* for mobile view */}
      <div className="mobile-contant-area">
        <h3>Share the Ride, Share the Future</h3>
        <p>
          Welcome to our innovative ride-sharing platform, where we're
          revolutionizing the way you commute. Say goodbye to the frustrations
          of traffic congestion and hello to a better, more efficient future. By
          choosing to carpool, you're not only easing the burden on our roadways
          but also actively contributing to a reduction in pollution, creating a
          cleaner environment for all. Imagine a world where every journey
          counts, where every shared ride makes a tangible difference. Join our
          community today and become a part of this movement towards
          sustainability. But the benefits don't stop there by sharing your
          commute, you're not only saving money on fuel and tolls but also
          earning extra income. Let's work together to build a brighter
          tomorrow, one ride at a time. Join us and discover the joys of shared
          transportation while making a positive impact on our planet. Your
          journey towards a greener future starts here.
        </p>
        <button type="button" class="btn btn-primary">
          JOIN US FOR FREE
        </button>
      </div>
    </>
  );
}
