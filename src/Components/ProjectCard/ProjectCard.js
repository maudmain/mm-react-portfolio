import "./projectCard.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card-container">
      <div className="image-div">
        <img
          src={process.env.PUBLIC_URL + "/images/" + props.img}
          alt="Project screenshot"
        />
      </div>
      <div className="project-detail">
        <h2 className="project-title">{props.title}</h2>
        <p> {props.text}</p>
      </div>
      <div className="project-btns">
        <NavLink to={props.view} className="btn">
          View
        </NavLink>
        <NavLink to={props.source} className="btn">
          Repo
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
