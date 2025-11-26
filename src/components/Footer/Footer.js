import React from "react";
import classes from "./Footer.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className={classes.container}>
      <div className={classes.containerCopyright}>
        <div className={classes.copy}>&copy;</div>
        <p>{t("common.footerText")}</p>
      </div>
    </footer>
  );
};

export default Footer;
