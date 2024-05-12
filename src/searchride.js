import React, { useEffect, useState } from "react";
import "./searchride.css";
import createstyle from "./search.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function Searchride() {
  const [data, setData] = useState([]);
  const [slstart, setsLstart] = useState('');
  const [slend, setsLend] = useState('');
  const host = "http://localhost:5000";


  useEffect(() => {
    fetch(`${host}/getrides`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className={createstyle.App}>
        <div className="search">
          <h5 style={{color: 'white'}}>Search Rides</h5>
          <form method="POST">
            <input
              type="lstart"
              name="lstart"
              id="lstart"
              onChange={(e) => setsLstart(e.target.value)}
              placeholder="Enter location*"
            />
            <input
              type="lend"
              name="lend"
              id="lend"
              onChange={(e) => setsLend(e.target.value)}
              placeholder="Enter destination*"
            />
          </form>
        </div>
        <div className="rides">
         {data.filter((i) => {
          return (
            slstart.toLowerCase() === '' ? i : i.lstart.toLowerCase().includes(slstart)
            // slend.toLowerCase() === '' ? i : i.lend.toLowerCase().includes(slend)
        );
         }).map((i) => {
          return (
            <div className="ride_card" key={i._id}>
            <div className="ride_details">
              <div className="card_left">
                <h4>From: {i.lstart}</h4>
                <h4>To: {i.lend}</h4>
              </div>
              <div className="card_right">
                <h4>Cost: {i.cost}</h4>
                <h4>Seats: {i.Npassenger}</h4>
              </div>
            </div>
            <div className="user_details">
              <h5>Name: {i.name}</h5>
              <h5>Mobile No: {i.number}</h5>
            </div>
          </div>
          );
         })}
        </div>
      </div>
    </>
  );
}
