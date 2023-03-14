import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../ProjectsData.json";
import Wrapper from "../Wrapper/Wrapper";

import React, { useState } from "react";

const Project = () => {
  const [projects] = useState(projectData);

  return (
    <div className="project-container">
      <h1 className="project-heading">Project Gallery</h1>
      <Wrapper>
        {projects.map((project) => (
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
      </Wrapper>
    </div>
  );
};

export default Project;
