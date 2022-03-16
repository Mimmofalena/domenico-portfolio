import React from "react";
import { projectsData } from "./projectsData";
import ProjectsDetail from "./ProjectsDetail";
import classes from "./Projects.module.css";
import Card from "../../utils/Card";

const ProjectsList = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.detailTitle}>My projects</h2>
      <Card>
        <ul className={classes.listContainer}>
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
        </ul>
      </Card>
    </div>
  );
};

export default ProjectsList;
