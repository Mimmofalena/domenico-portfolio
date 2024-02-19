import React, { useEffect } from "react";
import classes from "./Projects.module.css";
import { useLocation } from "react-router-dom";

const ProjectsDetail = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    // <Card>
    <div className={classes.listItem}>
      <a href={props.href} className={classes.itemImg}>
        <img src={props.src} alt={props.alt} />
      </a>
      <div className={classes.content}>
        <div className={classes.detailDescription}></div>
        <p className={classes.detailText}>{props.descriptionProject}</p>

        <div className={classes.detailDescription}></div>
        <p className={classes.detailText}>{props.descriptionTech}</p>
      </div>
    </div>
    // </Card>
  );
};

export default ProjectsDetail;
