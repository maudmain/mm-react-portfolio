import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroBg";
import AboutContent from "../Components/About Content/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="HI, I'M MAUD."
        text=" Front-end developer in the making!"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
