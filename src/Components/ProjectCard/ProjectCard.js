import "./projectCard.css";


import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card-container">
          <img src={ props.img } alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-detail">
              <p> { props.text}</p>
        <div className="project-btns">
          <NavLink to={ props.view} className="btn">
            View
          </NavLink>
          <NavLink to= {props.source} className="btn">
            Repo
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
