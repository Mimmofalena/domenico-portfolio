import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import classes from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={classes.switcher}>
      <button
        className={`${classes.button} ${language === "en" ? classes.active : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        className={`${classes.button} ${language === "it" ? classes.active : ""}`}
        onClick={() => setLanguage("it")}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
