import React from "react";
import classes from "./Stack.module.css";

import StackItem from "./StackItem";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

import { DiCss3 } from "react-icons/di";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";

const StackList = () => {
  return (
    <div className={classes.container}>
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
                <SiMui
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
          <FadeInWhenVisible delay={1.2}>
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
          <FadeInWhenVisible delay={1.4}>
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
          <FadeInWhenVisible delay={1.6}>
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
          <FadeInWhenVisible delay={1.8}>
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
        <LinkButton to="/domenico-portfolio/stack" />
      </Card>
    </div>
  );
};

export default StackList;
