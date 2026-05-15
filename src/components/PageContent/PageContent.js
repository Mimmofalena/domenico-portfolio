import React from "react";
import classes from "./PageContent.module.css";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import StackList from "../Stack/StackList";
import Welcome from "../Welcome/Welcome";

const PageContent = () => {
  return (
    <div className={classes.container}>
      <Welcome />
      <Projects />
      <StackList />
      <Contact />
    </div>
  );
};

export default PageContent;
