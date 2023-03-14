import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import portrait from "../../assets/PORTRAIT.jpg";

const Navbar = () => {
    const [click, setClick] = useState("true ");
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100 ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="header">
        <div className="avatar-div">
          <img className="avatar" src={portrait} alt="Maud's Portrait"></img>
          <Link to="/">
            <h1>Maud Mainnemard</h1>
          </Link>
        </div>
        <div>
          <ul className={click ? "navbar-menu " : "navbar-menu active"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a
                href={process.env.PUBLIC_URL + "/images/MaudMain-Resume.pdf"}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
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
}

export default Navbar