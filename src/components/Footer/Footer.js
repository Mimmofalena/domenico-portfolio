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

      {/* <div className={classes.containerIcons}>
        <a href="https://github.com/Mimmofalena">
          <AiFillGithub className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/">
          <AiFillLinkedin className={classes.icon} />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
