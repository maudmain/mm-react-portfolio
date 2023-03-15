// Importing style
import "./heroBg.css";

// Importing the necessary packages from React
import React, { Component } from "react";

class HeroImg extends Component {
  // 'HeroImg' is a new class that extends from the 'Component' class provided by React
  // Component class is a fundamental building block of React applications, and all React components must either extend this class or a subclass of it.
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1> {this.props.heading}</h1>
          <p> {this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg;
