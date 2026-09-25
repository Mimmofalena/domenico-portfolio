import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const HeaderList = (props) => {
  const { t } = useLanguage();
  return (
    <div className={props.className}>
      <NavLink
        end
        // style={{ textDecoration: "none", color: "black" }}
        to="domenico-portfolio"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        {t("header.home")}
      </NavLink>

      <NavLink
        to="domenico-portfolio/projects"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        {t("header.projects")}
      </NavLink>
      <NavLink
        to="domenico-portfolio/stack"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        {t("header.stack")}
      </NavLink>
      <NavLink
        to="domenico-portfolio/about"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        {t("header.about")}
      </NavLink>
    </div>
  );
};

export default HeaderList;
