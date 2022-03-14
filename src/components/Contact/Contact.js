import React from "react";
import Card from "../../utils/Card";
import classes from "./Contact.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={classes.container}>
      <Card>
        <h2 className={classes.title}>Get in touch</h2>

        <div className={classes.containerIcons}>
          <a
            className={classes.containerIcon}
            href="https://github.com/Mimmofalena"
          >
            <AiFillGithub className={classes.icon} /> <p>GitHub</p>
          </a>

          <a
            className={classes.containerIcon}
            href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/"
          >
            <AiFillLinkedin className={classes.icon} /> <p>LinkedIn</p>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
