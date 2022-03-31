import React from "react";

import { motion, useAnimation } from "framer-motion";
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

import { DiCss3 } from "react-icons/di";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";

const StackList = () => {
  const animation = useAnimation();

  return (
    <div className={classes.container}>
      {/* <div class={classes["custom-shape-divider-top-1647591263"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class={classes["shape-fill"]}
          ></path>
        </svg>
      </div> */}
      <Card>
        <div className={classes.iconContainer}>
          <GrMonitor className={classes.iconMonitor} />
        </div>

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
          <FadeInWhenVisible delay={0.2}>
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
          <FadeInWhenVisible delay={0.4}>
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
          <FadeInWhenVisible delay={0.4}>
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
          <FadeInWhenVisible delay={0.6}>
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
          <FadeInWhenVisible delay={0.6}>
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
          <FadeInWhenVisible delay={0.8}>
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
          <FadeInWhenVisible delay={0.8}>
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
          <FadeInWhenVisible delay={1}>
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
        <LinkButton to="/domenico-portfolio/stack" />
      </Card>
    </div>
  );
};

export default StackList;
