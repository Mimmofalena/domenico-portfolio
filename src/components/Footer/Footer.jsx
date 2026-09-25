import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useLanguage } from "../../contexts/LanguageContext";
import classes from "./Footer.module.css";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.container} role="contentinfo">
      <div className={classes.footerContent}>
        <nav className={classes.footerNav} aria-label="Footer navigation">
          <NavLink to="/domenico-portfolio">{t("header.home")}</NavLink>
          <NavLink to="/domenico-portfolio/projects">{t("header.projects")}</NavLink>
          <NavLink to="/domenico-portfolio/stack">{t("header.stack")}</NavLink>
          <NavLink to="/domenico-portfolio/about">{t("header.about")}</NavLink>
        </nav>

        <div className={classes.footerSocial}>
          <a
            href="https://github.com/Mimmofalena"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/domenico-cucinotta-b102a167/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <p className={classes.footerCopy}>
          &copy; {year} Domenico Cucinotta. {t("common.footerText")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
