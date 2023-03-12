import "./navbar.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="header">
      <Link to="/">
        <h1>Maud Mainnemard</h1>
      </Link>
      <div>
        <ul className="navbar-menu">
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
      </div>
    </nav>
  );
}

export default Navbar