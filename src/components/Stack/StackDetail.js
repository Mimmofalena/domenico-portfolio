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

import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const StackDetail = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <h2 className={classes.detailTitle}>Tech Stack</h2>
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
          </ul>
        </Card>
      </div>
      <Card>
        <div className={classes.textContainer}>
          <section class={classes.bio}>
            <h2>About Me</h2>
            <p>
              I'm on a mission to create exceptional user experiences through
              the power of code. My journey as a self-taught front-end developer
              began in November 2020, fueled by a thirst for knowledge and a
              passion for building beautiful, functional web applications.
            </p>

            <h3>Building a Strong Foundation</h3>
            <ul>
              <li>
                Johns Hopkins University web development course: HTML, CSS,
                JavaScript fundamentals.
              </li>
              <li>
                Jonas Schmedtmann's "The complete Javascript Course: from zero
                to expert": ES6 syntax, DOM manipulation, asynchronous
                programming, code refactoring.
              </li>
            </ul>

            <h3>Honing My Skills</h3>
            <ul>
              <li>
                FreeCodeCamp challenges: Sharpened CSS skills through articles,
                YouTube videos, and practice.
              </li>
              <li>
                Maximilian Schwarzmüller's React course: Functional components,
                React hooks, API interactions, reusable components (Doctor Page
                project).
              </li>
            </ul>

            <h3>Expanding My Horizons</h3>
            <ul>
              <li>
                Material UI project: Explored advanced front-end development
                techniques.
              </li>
              <li>
                Jonas Schmedtmann's Node.js course: Node.js with Express,
                MongoDB, Heroku deployment (Natours Project). Used Nodemailer in
                individual projects.
              </li>
            </ul>

            <h3>Certifications & Advanced Training</h3>
            <ul>
              <li>
                Angular Level 1 Certification - Angular Training (2024)
              </li>
              <li>
                Reactive Angular Course (with RxJs, Angular 20) - Udemy (2025)
              </li>
              <li>
                RxJS and Angular Signals Fundamentals - Pluralsight (2025)
              </li>
              <li>
                Application Security and Secure Coding Training Angular 2+ -
                Codebashing (2023)
              </li>
              <li>
                Understanding TypeScript - Udemy (2023)
              </li>
              <li>
                Node.js, Express, MongoDB & More: The Complete Bootcamp 2022 -
                Udemy
              </li>
              <li>
                MongoDB and the Document Model - MongoDB (2024)
              </li>
              <li>
                MongoDB: getting started with atlas - MongoDB (2024)
              </li>
              <li>
                Connecting to a MongoDB Database - MongoDB (2024)
              </li>
              <li>
                Intermediate Web and Front end Development - Coursera (2024)
              </li>
            </ul>

            <h3>Professional Experience</h3>
            <ul>
              <li>Nexi Online payment enterprise: React, Redux, Sagas.</li>
              <li>
                American automotive project (Current): Angular, RxJS, Azure
                DevOps, C#, backend technologies including Java, Gen AI, GitHub
                Copilot. Managing project coordination and supporting the
                development team.
              </li>
            </ul>

            <h3>Always Learning, Always Creating</h3>
            <p>
              In my free time, I experiment with Next.js and MongoDB in
              personal side projects, pushing the boundaries of my full-stack
              development skills. Currently deepening my knowledge of C# and
              .NET framework to enhance my backend development capabilities and
              better support my team in the automotive project.
            </p>

            <p>
              I'm constantly seeking new challenges and opportunities to learn
              and grow as a developer. If you're looking for a passionate and
              dedicated individual with a diverse skillset and a commitment to
              excellence, I'd love to connect!
            </p>
          </section>
        </div>
      </Card>
    </>
  );
};

export default StackDetail;
