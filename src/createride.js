import React from 'react';

export default function createride(){
    return(
        <>
      <div className="sMain">
        <h1>Publish a Ride</h1>
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
                  <option value="0">No. of seats you have avalaible*</option>
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
                  Publish the Ride
                </button>
              </form>
            </div>
          </div>
          <div className="sRight">
            <img src={require("./images/3.jpeg")} alt="main-img" />
          </div>
        </div>
      </div>
    </>
    );
}