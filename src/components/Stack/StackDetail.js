import React from "react";
import StackItem from "./StackItem";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMaterialui } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { SiPostman } from "react-icons/si";

import classes from "./Stack.module.css";
import { Routes, Route, Link } from "react-router-dom";

import { DiCss3 } from "react-icons/di";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
const StackDetail = () => {
  return (
    <>
      <h3 className={classes.detailTitle}>Tech Stack</h3>
      <Card>
        <ul className={classes.gridList}>
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
        </ul>
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
            <strong>HTML, CSS and JS</strong> ). Halfway through the course I
            realised the course was outdated. I then bought another course from
            Udemy that covered Javascript in detail(The complete Javascript
            Course: from zero to expert by Jonas Schmedtmann). The following is
            not an exhaustive list of all the topics covered :
          </p>
          <ul>
            <br />
            <li>
              - Javascript fundamentals including data types and variables
            </li>
            <li>
              - ES6 syntax including arrow functions, spread operator, object
              desctructuring
            </li>
            <li>- How Javascript works behind the scene</li>
            <li>- DOM manipulation</li>
          </ul>
          <br />
          <p>
            In the meantime I improved my <strong>CSS</strong> skills too. I
            read articles, watched youtube videos and completed various
            challenges within the 'freecodecamp' website.
            <br /> I soon started a &nbsp;
            <strong>React course</strong> by Maximilian Schwarzmuller. The
            course gave a brief overview of class-based components and focused
            mostly on functional components. I am comfortable using the most
            important Hooks, such as useState, useEffect, useRef. I have also
            used in some of the course projects other hooks like useContext,
            useReducer, useMemo, useCallback. The course covered REDUX for state
            management. I learned how to initiate component re-renders by
            changing state or props. CSS wise, the course covered different ways
            to style components such as with styled components and my favourite
            which is module.css.
            <br />
            <br />
          </p>
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
            <li>- Node JS with Express</li>
            <li>- Mongo DB as database</li>
            <li>- PostMan to test API endpoints</li>
            <li>- Deployment on Heroku</li>
          </ul>
          <br />I have covered many more topics during the past year of learning
          which I am happy to discuss it further.
        </div>
      </Card>
    </>
  );
};

export default StackDetail;
