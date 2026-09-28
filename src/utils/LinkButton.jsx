import React from "react";
import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";
import { useLanguage } from "../contexts/LanguageContext";

const LinkButton = (props) => {
  const { t } = useLanguage();
  return (
    <Link className={classes.link} to={props.to}>
      {t("common.discoverMore")}
    </Link>
  );
};

export default LinkButton;
