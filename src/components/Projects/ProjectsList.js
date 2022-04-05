import React from "react";
import { projectsData } from "./projectsData";
import ProjectsDetail from "./ProjectsDetail";
import classes from "./Projects.module.css";
import Card from "../../utils/Card";

const ProjectsList = () => {
  return (
    <>
      <h2 className={classes.detailTitle}>My projects</h2>
      <div className={classes.containerDetail}>
        {projectsData.map((item) => {
          return (
            <ProjectsDetail
              title={item.title}
              href={item.href}
              alt={item.alt}
              descriptionProject={item.descriptionProject}
              descriptionTech={item.descriptionTech}
              src={item.src}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsList;
