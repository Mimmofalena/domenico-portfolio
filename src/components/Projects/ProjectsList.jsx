import React from "react";
import { getProjectsData } from "./projectsData";
import ProjectsDetail from "./ProjectsDetail";
import classes from "./Projects.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectsList = () => {
  const { language, t } = useLanguage();
  const projectsData = getProjectsData(language);

  return (
    <>
      <h2 className={classes.detailTitle}>{t("projectsPage.title")}</h2>
      <div className={classes.containerDetail}>
        {projectsData.map((item) => {
          return (
            <ProjectsDetail
              key={item.title}
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
