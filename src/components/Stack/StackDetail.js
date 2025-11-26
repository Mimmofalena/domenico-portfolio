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
                Angular SSR in Depth (formerly Angular Universal) - Udemy (October
                2025)
              </li>
              <li>
                Reactive Angular Course (with RxJs, Angular 20) - Udemy
                (September 2025)
              </li>
              <li>
                RxJS and Angular Signals Fundamentals - Pluralsight (April 2025)
              </li>
              <li>
                GitHub Copilot Fundamentals: AI Paired Programming - Pluralsight
                (June 2024)
              </li>
              <li>
                Angular Template-driven Forms - Pluralsight (May 2024)
              </li>
              <li>
                Intermediate Web and Front end Development - Coursera (March
                2024)
              </li>
              <li>
                MongoDB: CRUD Operations: Insert and Find Documents - MongoDB
                (January 2024)
              </li>
              <li>
                MongoDB and the Document Model - MongoDB (January 2024)
              </li>
              <li>
                MongoDB: getting started with atlas - MongoDB (January 2024)
              </li>
              <li>
                Connecting to a MongoDB Database - MongoDB (January 2024)
              </li>
              <li>
                Application Security and Secure Coding Training Angular 2+ -
                Codebashing (October 2023)
              </li>
              <li>
                Angular – The Complete Guide (2023) - Maximilian Schwarzmuller,
                Udemy (October 2023)
              </li>
              <li>
                Understanding TypeScript - Maximilian Schwarzmuller, Udemy
                (September 2023)
              </li>
              <li>
                Node.js, Express, MongoDB & More: The Complete Bootcamp 2022 -
                Udemy (September 2021 - January 2022)
              </li>
              <li>
                React – The Complete Guide (including Hooks, React Router, Redux)
                - Maximilian Schwarzmuller, Udemy (March - June 2021)
              </li>
              <li>
                The Complete JavaScript Course: From Zero to Expert - Jonas
                Schmedtmann, Udemy (November 2020 - March 2021)
              </li>
              <li>
                HTML, CSS and Javascript for Web Developers - Johns Hopkins
                University, Coursera (September - November 2020)
              </li>
            </ul>

            <h3>Professional Experience</h3>
            <ul>
              <li>
                Automotive Sector (May 2023 - Present): Frontend Developer working
                with Angular 11, TypeScript, Angular Material, RxJS, Azure DevOps,
                .NET. Developing new features, bug fixing, performance improvement.
                Supporting Backend team with C#, .NET framework and SQL.
              </li>
              <li>
                Digital Payments Sector (May 2022 - May 2023): Frontend Developer
                working on Cardholders and Backoffice Projects using React, Redux,
                Sagas, React Class and Functional Components.
              </li>
            </ul>

            <h3>Always Learning, Always Creating</h3>
            <p>
              In my free time, I experiment with Next.js, MongoDB, shadcn, and
              Tailwind CSS in personal side projects, pushing the boundaries of my
              full-stack development skills. Currently deepening my knowledge of
              C#, .NET framework, and SQL to enhance my backend development
              capabilities and better support my team in the automotive project.
            </p>

            <p>
              I'm an early adopter of generative AI technologies and have been
              consistently using AI tools for over two years to enhance my
              productivity. These tools help me delegate tedious and repetitive
              tasks, while I maintain a "man in the loop" approach to ensure
              quality, accuracy, and reliability of the code. I was among the
              first to implement and promote the use of instructions.md files in
              workspaces to improve consistency in AI outputs. This innovative
              methodology has helped enhance code quality and development
              efficiency in my projects.
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
