import "./projectCard.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="project-container">
      <h1 className="project-heading">Project Gallery</h1>
      <div className="card-container">
        <img src="" alt="" />
        <h2 className="project-title">this is the title</h2>
        <div className="project-detail">
          <p>this is the text</p>
          <div className="project-btns">
            <NavLink to="" className="btn">
              View
            </NavLink>
            <NavLink to="" className="btn">
              Repo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
