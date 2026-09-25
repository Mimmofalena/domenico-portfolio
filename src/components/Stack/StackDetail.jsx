import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Stack.module.css";

import StackItem from "./StackItem";
import Card from "../../utils/Card";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { useLanguage } from "../../contexts/LanguageContext";

import { DiReact, DiJavascript, DiHtml5, DiNodejsSmall, DiMongodb, DiCss3 } from "react-icons/di";
import { SiMui, SiPostman, SiCsharp, SiDotnet, SiMicrosoftazure, SiAzuredevops, SiMysql, SiIonic } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular, FaBootstrap, FaMobileAlt, FaRobot, FaProjectDiagram, FaTerminal } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";

const stackItems = [
  { name: "JavaScript", icon: DiJavascript, color: "#efd81d", category: "frontend" },
  { name: "HTML", icon: DiHtml5, color: "#e96228", category: "frontend" },
  { name: "CSS", icon: DiCss3, color: "#2862e9", category: "frontend" },
  { name: "React", icon: DiReact, color: "#03d1f7", category: "frontend" },
  { name: "Angular", icon: FaAngular, color: "#d32f2f", category: "frontend" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#000", category: "frontend" },
  { name: "Node.js", icon: DiNodejsSmall, color: "#7cb701", category: "backend" },
  { name: "MongoDB", icon: DiMongodb, color: "#138d4d", category: "backend" },
  { name: "Material UI", icon: SiMui, color: "#007bf7", category: "frontend" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#4c0bce", category: "frontend" },
  { name: "C#", icon: SiCsharp, color: "#68217a", category: "backend" },
  { name: ".NET", icon: SiDotnet, color: "#512bd4", category: "backend" },
  { name: "SQL", icon: SiMysql, color: "#00758f", category: "backend" },
  { name: "Git", icon: BiGitBranch, color: "#e84d31", category: "tools" },
  { name: "Postman", icon: SiPostman, color: "#f76935", category: "tools" },
  { name: "Azure", icon: SiMicrosoftazure, color: "#0089d6", category: "tools" },
  { name: "Azure DevOps", icon: SiAzuredevops, color: "#0078d7", category: "tools" },
  { name: "Ionic", icon: SiIonic, color: "#3880ff", category: "mobile" },
  { name: "Capacitor", icon: FaMobileAlt, color: "#119EFF", category: "mobile" },
  { name: "GitHub Copilot", icon: FaRobot, color: "#2da44e", category: "ai" },
  { name: "N8N", icon: FaProjectDiagram, color: "#ea4b71", category: "ai" },
  { name: "Ollama", icon: FaRobot, color: "#7c3aed", category: "ai" },
  { name: "Opencode", icon: FaTerminal, color: "#10b981", category: "ai" },
];

const StackDetail = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const certificationItems = t("stackPage.certificationItems");
  const professionalExperienceItems = t("stackPage.professionalExperienceItems");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <h2 className={classes.detailTitle}>{t("stackPage.title")}</h2>
      <div className={classes.container}>
        <div className={classes["custom-shape-divider-bottom-1647593320"]}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={classes["shape-fill"]}
            ></path>
          </svg>
        </div>

        <Card>
          <ul className={classes.gridList}>
            {stackItems.map((item, index) => (
              <FadeInWhenVisible key={item.name} delay={Math.min(index * 0.06, 0.8)}>
                <StackItem
                  name={item.name}
                  category={item.category}
                  icon={<item.icon style={{ color: item.color }} />}
                />
              </FadeInWhenVisible>
            ))}
          </ul>
        </Card>
      </div>
      <Card>
        <div className={classes.textContainer}>
          <section className={classes.bio}>
            <h2>{t("stackPage.aboutMe")}</h2>
            <p>{t("stackPage.aboutMeIntro")}</p>

            <h3>{t("stackPage.professionalExperience")}</h3>
            <ul>
              {Array.isArray(professionalExperienceItems) && professionalExperienceItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.certifications")}</h3>
            <ul>
              {Array.isArray(certificationItems) && certificationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.alwaysLearning")}</h3>
            <p>{t("stackPage.alwaysLearningText")}</p>
            <p>{t("stackPage.aiText")}</p>
            <p>{t("stackPage.closingText")}</p>
          </section>
        </div>
      </Card>
    </>
  );
};

export default StackDetail;
