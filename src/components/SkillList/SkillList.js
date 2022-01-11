import React from "react";
import SkillItem from "./SkillItem";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import classes from "./SkillList.module.css";

import { DiCss3 } from "react-icons/di";
import Card from "../../utils/Card";
const SkillList = () => {
  return (
    <Card>
      <section className={classes.container}>
        <h3 className={classes.title}>Tech Stack</h3>
        <ul className={classes.gridList}>
          <SkillItem
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
          <SkillItem
            name="HTML"
            icon={
              <DiHtml5
                style={{
                  color: "#e96228",
                }}
              />
            }
          />
          <SkillItem
            name="CSS"
            icon={
              <DiCss3
                style={{
                  color: "#2862e9",
                }}
              />
            }
          />
          <SkillItem
            name="React"
            icon={
              <DiReact
                style={{
                  color: "#03d1f7",
                }}
              />
            }
          />
          <SkillItem
            name="Node"
            icon={
              <DiNodejsSmall
                style={{
                  color: "#7cb701",
                }}
              />
            }
          />
          <SkillItem
            name="Mongo"
            icon={
              <DiMongodb
                style={{
                  color: "#138d4d",
                }}
              />
            }
          />
        </ul>
      </section>
    </Card>
  );
};

export default SkillList;
