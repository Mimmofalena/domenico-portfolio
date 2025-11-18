import React, { useState } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import HeaderList from "./HeaderList";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>{t("header.logo")}</h2>
      <div className={classes.menu}>
        {isOpen ? (
          <h2 className={classes.more} onClick={menuHandler}>
            <CgDetailsMore />
          </h2>
        ) : (
          <>
            <div className={classes.mask} onClick={menuHandler} />
            <div className={classes.openMenu}>
              <p className={classes.close} onClick={menuHandler}>
                X
              </p>
              <NavLink
                end
                // style={{ textDecoration: "none", color: "black" }}
                to="domenico-portfolio"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                onClick={menuHandler}
              >
                {t("header.home")}
              </NavLink>

              <NavLink
                to="domenico-portfolio/projects"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                onClick={menuHandler}
              >
                {t("header.projects")}
              </NavLink>
              <NavLink
                to="domenico-portfolio/stack"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                onClick={menuHandler}
              >
                {t("header.stack")}
              </NavLink>
              <NavLink
                to="domenico-portfolio/about"
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                onClick={menuHandler}
              >
                {t("header.about")}
              </NavLink>
              <LanguageSwitcher />
            </div>
          </>
        )}
      </div>
      <HeaderList className={classes.largeScreen} />
      <LanguageSwitcher />
    </div>
    // </div>
  );
};

export default Header;
