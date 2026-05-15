import React from "react";
import classes from "./Stack.module.css";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";
import { useLanguage } from "../../contexts/LanguageContext";

const chipGroup = (title, items, chipClass) => (
  <div className={classes.techSection}>
    <h3 className={classes.techSectionTitle}>{title}</h3>
    <div className={classes.techChipContainer}>
      {items.map(tech => (
        <span key={tech} className={`${classes.techChip} ${chipClass}`}>
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const StackList = () => {
  const { t } = useLanguage();
  const frontendTechs = ["Angular", "React", "Next.js", "TypeScript", "RxJS", "Angular Signals", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Angular Material", "Material-UI", "shadcn"];
  const backendTechs = ["Node.js", "C#", ".NET", "SQL", "MongoDB", "Express"];
  const mobileTechs = ["Ionic", "Capacitor", "Angular"];
  const aiTools = ["GitHub Copilot", "N8N", "Ollama", "Opencode"];
  const tools = ["Git", "Azure DevOps", "Postman", "NPM"];

  return (
    <div className={classes.container}>
      <div className={classes["custom-shape-divider-top-1647591263"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
      <Card>
        <div className={classes.iconContainer}>
          <GrMonitor className={classes.iconMonitor} />
        </div>
        <FadeInWhenVisible delay={0.2}>
          <div className={classes.paperCard}>
            <h2 className={classes.stackListTitle}>{t("stackPage.title")}</h2>

            {chipGroup(t("stackPage.frontend"), frontendTechs, classes.chipFrontend)}
            {chipGroup(t("stackPage.backendDatabase"), backendTechs, classes.chipBackend)}
            {chipGroup(t("stackPage.mobile"), mobileTechs, classes.chipMobile)}
            {chipGroup(t("stackPage.aiTools"), aiTools, classes.chipAI)}
            {chipGroup(t("stackPage.toolsDevops"), tools, classes.chipTools)}
          </div>
        </FadeInWhenVisible>
        <LinkButton to="/domenico-portfolio/stack" />
      </Card>
    </div>
  );
};

export default StackList;
