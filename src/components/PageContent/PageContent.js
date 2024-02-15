import React from "react";
import classes from "./PageContent.module.css";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import StackList from "../Stack/StackList";

const PageContent = () => {
  return (
    <div className={classes.container}>
      <About />

      <Projects />
      <StackList />
      <Contact />
    </div>
  );
};

export default PageContent;
