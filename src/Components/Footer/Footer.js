// Importing style
import "./footer.css";

// Importing the necessary packages from React
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
          <h4>To check out what I have been up to, follow me on </h4>
          {/* anchor tags with links and icons for GitHub and LinkedIn */}
          <a href="https://github.com/maudmain" target={"_blank"}>
            <FaGithub
              size={40}
              style={{
                color: "#f2f2f2",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/maud-mainnemard/"
            target={"_blank"}
          >
            <FaLinkedin
              size={40}
              style={{
                color: "#f2f2f2",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
