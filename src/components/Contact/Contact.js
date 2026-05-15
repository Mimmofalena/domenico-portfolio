import React from "react";
import Card from "../../utils/Card";
import classes from "./Contact.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useLanguage } from "../../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className={classes.container} id="contact-section">
      <Card>
        <h2 className={classes.title}>{t("contact.title")}</h2>

        <div className={classes.containerIcons}>
          <a
            className={classes.containerIcon}
            href="https://github.com/Mimmofalena"
          >
            <AiFillGithub className={classes.icon} /> <p>{t("contact.github")}</p>
          </a>

          <a
            className={classes.containerIcon}
            href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/"
          >
            <AiFillLinkedin className={classes.icon} /> <p>{t("contact.linkedin")}</p>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
