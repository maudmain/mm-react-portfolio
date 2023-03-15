// Importing style
import "./navbar.css";
// Importing the necessary packages from React
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import portrait from "../../assets/PORTRAIT.jpg";

const Navbar = () => {
  // Using the useState hook to initialize 'click' state variable with the value "true"

  const [click, setClick] = useState("true ");
  // Defining the handleClick function that toggles the value of 'click'
  const handleClick = () => setClick(!click);

  // Using the useState hook to initialize 'color' state variable with the value false
  const [color, setColor] = useState(false);

  // Defining the changeColor function that changes the value of 'color' based on the scroll position
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  // Adding an event listener for 'scroll' that calls the changeColor function
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="header">
        <div className="avatar-div">
          <img className="avatar" src={portrait} alt="Maud's Portrait"></img>
          <Link to="/">
            <h1>Maud Mainnemard Portfolio</h1>
          </Link>
        </div>
        <div>
          <ul className={click ? "navbar-menu " : "navbar-menu active"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {/* Rendering a link to Maud's resume */}
              <a
                href={process.env.PUBLIC_URL + "/images/MaudMain-Resume.pdf"}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          {
            /* Rendering the hamburger icon and binding the handleClick function to its click event. */
          }
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaBars size={20} style={{ color: "#f2f2f2" }} />
            ) : (
              <FaTimes size={20} style={{ color: "#f2f2f2" }} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
