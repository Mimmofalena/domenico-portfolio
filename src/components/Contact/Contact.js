import React from "react";
import Card from "../../utils/Card";
import classes from "./Contact.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <Card>
      <h3 className={classes.title}>Get in touch</h3>

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
  );
};

export default Contact;

{
  /* <ul>
        <li>
          <a
            href="https://github.com/Mimmofalena"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul> */
}
