import "./jumbotron.css"
import React from 'react'

import HeroBg from "../assets/img/oleg-laptev-QRKJwE6yfJo-unsplash.jpg";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="mask">
        <img className="jumbotron-bg" src={HeroBg} alt="" Jumbotron Image />
        <div className="jumbotron-content">
          <p>John Johnson</p>
          <h2>“First, solve the problem. Then, write the code.”</h2>

          <Link to="/about" className="btn">About me</Link>
          <Link to="/projects" className="btn">Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron