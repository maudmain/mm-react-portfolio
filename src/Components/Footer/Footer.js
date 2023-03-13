import "./footer.css";

import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
          <h4>To check out what I have been up to, follow me on </h4>
          <FaGithub
            size={40}
            style={{
              color: "#f2f2f2",
            }}
          />
          <FaLinkedin
            size={40}
            style={{
              color: "#f2f2f2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
