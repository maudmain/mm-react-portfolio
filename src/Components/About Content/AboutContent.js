import "./aboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>A little about me</h1>
        <p>
          In 2022 I decided to change my career path after 12 years working in
          various administrative jobs. If I am honest I was tired of the
          slow-moving pace and the mostly paperbase operation. I am currently
          taking part in a front end development bootcamp in the hope to start a
          career in Tech. I am not sure where the road will lead so keep in
          touch to find out.
        </p>
        <Link to="/projects">
          <button className="btn">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutContent