import React from "react";
import classes from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.containerCopyright}>
        <div className={classes.copy}>&copy;</div>
        <p>Copyright by Domenico Cucinotta</p>
      </div>

      <div className={classes.containerIcons}>
        <AiFillGithub
          href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/"
          className={classes.icon}
        />

        <AiFillLinkedin
          href="https://github.com/Mimmofalena"
          className={classes.icon}
        />
      </div>
    </footer>
  );
};

export default Footer;
