import "./navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState("false");
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
        <Link to="/">
          <h1>Maud Mainnemard</h1>
        </Link>
        <div>
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
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
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#f2f2f2" }} />
            ) : (
              <FaBars size={20} style={{ color: "#f2f2f2" }} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar