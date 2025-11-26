import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Stack.module.css";

import StackItem from "./StackItem";
import Card from "../../utils/Card";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { useLanguage } from "../../contexts/LanguageContext";

const StackDetail = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const buildingFoundationItems = t("stackPage.buildingFoundationItems");
  const honingSkillsItems = t("stackPage.honingSkillsItems");
  const expandingHorizonsItems = t("stackPage.expandingHorizonsItems");
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
            <FadeInWhenVisible delay={0.2}>
              <StackItem
                className={classes.javascript}
                name="Js"
                icon={
                  <DiJavascript
                    style={{
                      color: "#efd81d",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <StackItem
                name="HTML"
                icon={
                  <DiHtml5
                    style={{
                      color: "#e96228",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6}>
              <StackItem
                name="CSS"
                icon={
                  <DiCss3
                    style={{
                      color: "#2862e9",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.8}>
              <StackItem
                name="React"
                icon={
                  <DiReact
                    style={{
                      color: "#03d1f7",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1}>
              <StackItem
                name="Node"
                icon={
                  <DiNodejsSmall
                    style={{
                      color: "#7cb701",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1.2}>
              <StackItem
                name="Mongo"
                icon={
                  <DiMongodb
                    style={{
                      color: "#138d4d",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1.4}>
              <StackItem
                name="Material"
                icon={
                  <SiMui
                    style={{
                      color: "#007bf7",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1.6}>
              <StackItem
                name="Git"
                icon={
                  <BiGitBranch
                    style={{
                      color: "#e84d31",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={1.8}>
              <StackItem
                name="PostMan"
                icon={
                  <SiPostman
                    style={{
                      color: "#f76935",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={2.0}>
              <StackItem
                name="Nextjs"
                icon={
                  <TbBrandNextjs
                    style={{
                      color: "#000",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={2.2}>
              <StackItem
                name="Angular"
                icon={
                  <FaAngular
                    style={{
                      color: "#d32f2f",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={2.4}>
              <StackItem
                name="Angular Material"
                icon={
                  <FaAngular
                    style={{
                      color: "#f76935",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={2.6}>
              <StackItem
                name="Bootstrap"
                icon={
                  <FaBootstrap
                    style={{
                      color: "#4c0bce",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={2.8}>
              <StackItem
                name="C#"
                icon={
                  <SiCsharp
                    style={{
                      color: "#68217a",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={3.0}>
              <StackItem
                name=".NET"
                icon={
                  <SiDotnet
                    style={{
                      color: "#512bd4",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={3.2}>
              <StackItem
                name="Azure DevOps"
                icon={
                  <SiAzuredevops
                    style={{
                      color: "#0078d7",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={3.4}>
              <StackItem
                name="Azure"
                icon={
                  <SiMicrosoftazure
                    style={{
                      color: "#0089d6",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={3.6}>
              <StackItem
                name="GitHub Copilot"
                icon={
                  <FaRobot
                    style={{
                      color: "#2da44e",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={3.8}>
              <StackItem
                name="SQL"
                icon={
                  <SiMysql
                    style={{
                      color: "#00758f",
                    }}
                  />
                }
              />
            </FadeInWhenVisible>
          </ul>
        </Card>
      </div>
      <Card>
        <div className={classes.textContainer}>
          <section className={classes.bio}>
            <h2>{t("stackPage.aboutMe")}</h2>
            <p>
              {t("stackPage.aboutMeIntro")}
            </p>

            <h3>{t("stackPage.buildingFoundation")}</h3>
            <ul>
              {Array.isArray(buildingFoundationItems) && buildingFoundationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.honingSkills")}</h3>
            <ul>
              {Array.isArray(honingSkillsItems) && honingSkillsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.expandingHorizons")}</h3>
            <ul>
              {Array.isArray(expandingHorizonsItems) && expandingHorizonsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.certifications")}</h3>
            <ul>
              {Array.isArray(certificationItems) && certificationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.professionalExperience")}</h3>
            <ul>
              {Array.isArray(professionalExperienceItems) && professionalExperienceItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>{t("stackPage.alwaysLearning")}</h3>
            <p>
              {t("stackPage.alwaysLearningText")}
            </p>

            <p>
              {t("stackPage.aiText")}
            </p>

            <p>
              {t("stackPage.closingText")}
            </p>
          </section>
        </div>
      </Card>
    </>
  );
};

export default StackDetail;
