import React from "react";
import "./searchride.css";

export default function Searchride() {
  return (
    <>
      <div className="sMain">
        <h1>Go everywhere with Ride Bro</h1>
        <p>"Every shared ride is a new story on wheels."</p>
        <div className="sdown">
          <div className="sLeft">
            <h5>Request a Ride, Hop in and Go</h5>
            <div className="sForm">
              <form className="Lform">
                <input
                  type="lstart"
                  name="lstart"
                  id="lstart"
                  placeholder="Enter location*"
                />
                <input
                  type="lend"
                  name="lend"
                  id="lend"
                  placeholder="Enter destination*"
                />
                <select name="Npassenger" id="Npassenger">
                  <option value="0">No. of passenger*</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <label for="Date and time"><h6>Choose Date and time</h6></label>
                <input
                  type="datetime-local"
                  id="Dateandtime"
                  name="dateandtime"
                />
                <button className="btn btn-primary mbutton">
                  Search for avalaible rides
                </button>
              </form>
            </div>
          </div>
          <div className="sRight">
            <img src={require("./images/2.jpeg")} alt="main-img" />
          </div>
        </div>
      </div>
    </>
  );
}
