"use client";
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

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
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchride">
                Search a Ride
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createride">
                Publish a Ride
              </Link>
            </li>
          </ul>
        </div>
        <div className="login-button">
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
      {/* mobile nav bar */}
      <div className="navbar navbar-expand-lg navbar-light bg-light mobile-navbar">
        <div className="container-fluid">
          <img
            className="logo-img"
            src={require("./images/logo.png")}
            alt="brandlogo"
          />
          <span className="brandname">RIDE BRO</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/searchride">
                  Search a Ride
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createride">
                  Publish a Ride
                </Link>
              </li>
              <li>
                <div className="login-button">
                  <Link className="nav-link" to="/login">
                    <button type="button" className="btn btn-primary">
                      LOGIN
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
