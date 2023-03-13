import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from '../Components/Hero/HeroBg';
import ProjectCard from '../Components/ProjectCard/ProjectCard';


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