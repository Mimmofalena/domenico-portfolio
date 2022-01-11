import React from "react";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <section className={classes.container}>
      <h3 className={classes.title}>Get in touch</h3>
      <ul>
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
      </ul>
    </section>
  );
};

export default Contact;
