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

import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const StackDetail = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
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
        <h2 className={classes.detailTitle}>Tech Stack</h2>

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

            <h3>Professional Experience</h3>
            <ul>
              <li>Online payment enterprise: React, Redux, Sagas.</li>
              <li>American company automotive project: Angular, RxJS.</li>
            </ul>

            <h3>Always Learning, Always Creating</h3>
            <p>
              In my free time, I experiment with Next.js and MongoDB in a
              personal side project, pushing the boundaries of my full-stack
              development skills.
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
