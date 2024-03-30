import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
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
      {/* mobile nav bar */}
      <div class="navbar navbar-expand-lg navbar-light bg-light mobile-navbar">
        <div class="container-fluid">
          <img
            className="logo-img"
            src={require("./images/logo.png")}
            alt="brandlogo"
          />
          <span className="brandname">RIDE BRO</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/home">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  ABOUT US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
