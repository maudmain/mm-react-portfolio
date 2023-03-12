import "./navbar.css"
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setClick] = useState("false");
    const handleClick = () => setClick(!click)

  return (
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
                      <FaTimes size={20} style={{ color: "#f96d00" }} />
                  ) : (
                      <FaBars size={20} style={{ color: "#f96d00" }} />
                              )}  
        </div>
      </div>
    </nav>
  );
}

export default Navbar