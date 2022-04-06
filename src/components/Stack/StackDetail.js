import React from "react";
import classes from "./Stack.module.css";

import StackItem from "./StackItem";
import Card from "../../utils/Card";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMaterialui } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const StackDetail = () => {
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
                  <SiMaterialui
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
          </ul>
        </Card>
      </div>
      <Card>
        <div className={classes.textContainer}>
          <p>
            I have started my journey as a self-taught front end developer in
            November 2020.
          </p>
          <br />
          The very first course I undertook with the&nbsp;
          <a
            style={{ textDecoration: "underline" }}
            href="https://coursera.org/share/d19868e048232bdf5982c63fca84b95b"
          >
            Johns Hopkins University.
          </a>
          <p>
            It covered the basics of web development (
            <strong>HTML, CSS and JS</strong> ). I then attended and completed a
            Javascript course that covered the language in detail. (The complete
            Javascript Course: from zero to expert by Jonas Schmedtmann). The
            following are some of the topics covered:
          </p>
          <ul>
            <br />
            <li>
              Javascript fundamentals including data types and variables (const
              and let)
            </li>
            <li>
              ES6 syntax including arrow functions, spread operator, object
              desctructuring
            </li>
            <li>
              Working with arrays, objects, short circuiting && and ||, loops,
              map(), filter(), find()
            </li>
            <li> Manipulating CSS through JS</li>
            <li> How Javascript works behind the scene</li>
            <li> DOM manipulation</li>
            <li> Code refactoring and DRY principles</li>
            <li>Asynchronous Javascript: promises, async/await, try/catch </li>
          </ul>
          <br />
          <p>
            In the meantime I improved my <strong>CSS</strong> skills too. I
            read articles, watched youtube videos and completed various
            challenges within the 'freecodecamp' website.
            <br /> I soon started a &nbsp;
            <strong>React course</strong> by Maximilian Schwarzmuller. The
            course gave a brief overview of class-based components and focused
            mostly on functional components. After completing the course, I have
            made different projects using REACT only, such as &nbsp;{" "}
          </p>
          <a
            style={{ textDecoration: "underline" }}
            href="https://mimmofalena.github.io/dottoressa-marina/"
          >
            Doctor page.
          </a>
          &nbsp; <br />
          To sum up my REACT skills:
          <ul>
            <li>Functional components</li>
            <li>
              Most used React Hooks (useState, useEffect, useRef, useContext)
            </li>
            <li>Sending http request to API using useEffect</li>
            <li>Using props</li>
            <li>working with main events and listening to user input</li>
            <li>Handling forms with react</li>
            <li>Working with lists and understaing "Keys"</li>
            <li>Conditional rendering</li>
            <li>Debugging react</li>
            <li>Css modules</li>
            <li>Making reusable components such as Buttons, Cards</li>
            Redux (used in this{" "}
            <a
              href="https://mimmofalena.github.io/Todo-REDUX/"
              style={{ textDecoration: "underline" }}
            >
              DEMO project
            </a>
            )
          </ul>
          <br />
          <br />
          Right after I finished React course and after some digging, I made
          &nbsp;
          <a
            style={{ textDecoration: "underline" }}
            href="https://mimmofalena.github.io/dottoressa-marina/"
          >
            this project
          </a>
          &nbsp; using and learning <strong>Material UI</strong>.
          <br />I have recently completed a full comprehensive&nbsp;
          <strong>NODE</strong> js course by Jonas Schmedtmann. During this
          course I made&nbsp;
          <a
            style={{ textDecoration: "underline" }}
            href="https://natours-domenico.herokuapp.com/"
          >
            Natours Project
          </a>
          &nbsp; which involves using the following technologies :
          <br />
          <br />
          <ul>
            <li> Node JS with Express</li>
            <li> Mongo DB as database</li>
            <li> PostMan to test API endpoints</li>
            <li> Deployment on Heroku</li>
          </ul>
          <br />
          Even though I have not made a full NODE JS app on my own yet, I have
          implemented little back end functionality, for example using
          nodemailer &nbsp;
          <a
            style={{ textDecoration: "underline" }}
            href="https://mimmofalena.github.io/dottoressa-marina/"
          >
            in this project.
          </a>
          &nbsp;
        </div>
      </Card>
    </>
  );
};

export default StackDetail;
