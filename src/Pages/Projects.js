import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroBg";
import Project from "../Components/ProjectGallery/Project";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS" text="Check out my latest projects." />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
