import React, { useState } from "react";
import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
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
    <header className={classes.header} role="banner">
      <Link to="/domenico-portfolio" className={classes.logoLink}>
        <h2 className={classes.logo}>{t("header.logo")}</h2>
      </Link>
      <div className={classes.menu}>
        {isOpen ? (
          <button className={classes.more} onClick={menuHandler} aria-label="Open menu">
            <RiMenuLine />
          </button>
        ) : (
          <>
            <div className={classes.mask} onClick={menuHandler} />
            <div className={classes.openMenu}>
              <button className={classes.close} onClick={menuHandler} aria-label="Close menu">
                <RiCloseLine />
              </button>
              <NavLink
                end
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
      <div className={classes.desktopSwitcher}>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
