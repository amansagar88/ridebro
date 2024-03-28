import React from "react";
import "./herosection.css";

export default function HeroSection() {
  return (
    <>
      <div className="main-desktop-body">
        <div className="contact-area">
          <h1>Share your Ride, Save the Earth</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="img-area">
          <img src={require("./images/main-img.png")} alt="main-img" />
        </div>
      </div>
    </>
  );
}
