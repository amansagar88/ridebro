import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="Nav-Bar">
      <div className="nav-logo">
        <img
          className="logo-img"
          src={require("./images/logo.png")}
          alt="brandlogo"
        />
        <span className="brandname">RIDE BRO</span>
      </div>
      <div className="Nav-links">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      <div className="login-button">
        <button type="button" class="btn btn-primary">
          LOGIN
        </button>
      </div>
    </div>
  );
}
