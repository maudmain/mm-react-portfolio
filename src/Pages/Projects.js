import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg from '../Components/HeroImg';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <ProjectCard />
      
      <Footer />
    </div>
  );
}

export default Projects