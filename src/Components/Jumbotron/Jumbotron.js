// Importing style
import "./jumbotron.css"

// Importing the necessary packages from React
import React from "react";
import { Link } from "react-router-dom";

// Importing background image
import HeroBg from "../../assets/img/oleg-laptev-QRKJwE6yfJo-unsplash.jpg";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="mask">
        <img className="jumbotron-bg" src={HeroBg} alt=" Background by Oleg Laptev of an orange microphone on organge backgroung " />
        <div className="jumbotron-content">
          <p>John Johnson once said:</p>
          <h2>“First, solve the problem. Then, write the code.”</h2>
          <Link to="/about">
            <button className="btn">About</button>
          </Link>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
