import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './createride.css';
import createstyle from "./create.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Createride(props) {
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const jwtFromStorage = localStorage.getItem("token");
    if (jwtFromStorage) {
      setToken(jwtFromStorage);
      validateJwt(jwtFromStorage);
    } else {
      navigate("/login");
    }
  }, []);

  const validateJwt = (token) => {
    fetch(`${host}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid JWT");
        }
      })
      .then((data) => {
        if (data.isValid) {
          setIsEnabled(true);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  };

  const [ride, setRide] = useState({
    lstart: "",
    lend: "",
    cost: "",
    Npassenger: "",
    dateandtime: "",
  });

  let name, value;

  const changeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRide({ ...ride, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { lstart, lend, cost, Npassenger, dateandtime } = ride;
    const res = await fetch(`${host}/createride`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lstart,
        lend,
        cost,
        Npassenger,
        dateandtime,
        number: props.usernumber,
        name: props.username,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error('Please fill all the fields.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      toast.success('Ride created Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setTimeout(() => {
        navigate("/searchride");
      }, 2500); 
    }
  };

  return (
    <>
    <div className={createstyle.App}>
      <div className="create">
        <h1>Publish a Ride</h1>
        <form method="POSt">
          <input
            type="lstart"
            name="lstart"
            id="lstart"
            placeholder="Enter location*"
            value={ride.lstart}
            onChange={changeHandler}
          />
          <input
            type="lend"
            name="lend"
            id="lend"
            placeholder="Enter destination*"
            value={ride.lend}
            onChange={changeHandler}
          />
          <input
            type="cost"
            name="cost"
            id="cost"
            placeholder="Cost per seat*"
            value={ride.cost}
            onChange={changeHandler}
          />
          <select
            name="Npassenger"
            id="Npassenger"
            value={ride.Npassenger}
            onChange={changeHandler}
          >
            <option value="0">No. of seats you have avalaible*</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="Date and time">
            <h6>Choose Date and time</h6>
          </label>
          <input
            type="datetime-local"
            id="Dateandtime"
            name="dateandtime"
            value={ride.dateandtime}
            onChange={changeHandler}
          />
          <button className={createstyle.button_common} onClick={submitHandler}>
            Publish the Ride
          </button>
        </form>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}
