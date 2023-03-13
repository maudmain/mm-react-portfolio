import "./aboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";

import portrait from "../../assets/PORTRAIT.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>A little about me</h1>
        <p>
          In 2022 I decided to change my career path after
          12 years working in various administrative jobs. If I am honest I was tired of the slow-moving pace and the
          mostly paperbase operation. I am currently taking
          part in a front end development bootcamp in the hope to start a career
          in Tech. I am not sure where the road will lead so keep in touch to find out.
              </p>
              <Link
                  to="/contact">
                  <button className="btn">Contact</button>
              </Link>
      </div>
          <div className="right">
              <div className="img-container">
                  <img src={ portrait } ></img>
              </div>
      </div>
    </div>
  );
}

export default AboutContent