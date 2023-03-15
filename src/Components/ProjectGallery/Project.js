// importing component and json file
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../ProjectsData.json";

// Importing the necessary packages from React
import React, { useState } from "react";

const Project = () => {
  // Using the useState hook to initialize the 'projects' state variable with the value of projectData
  const [projects] = useState(projectData);

  return (
    <div className="project-container">
      <h1 className="project-heading">Project Gallery</h1>
      {projects.map((project) => (
        // Rendering the ProjectCard component with the respective props for each project
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          img={project.img}
          text={project.text}
          view={project.view}
          source={project.source}
        />
      ))}
    </div>
  );
};

export default Project;
