import React from "react";
import classes from "./Stack.module.css";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";
import { Container, Paper, Typography } from "@mui/material";

const StackList = () => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.iconContainer}>
          <GrMonitor className={classes.iconMonitor} />
        </div>
        <Container component="main">
          <FadeInWhenVisible delay={0.2}>
            <Paper style={{ padding: "20px", marginTop: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Tech Stack
              </Typography>
              <Typography variant="body1" gutterBottom>
                As a Frontend Developer with experience in full-stack
                development, I excel in transforming design mockups into
                fully-functional websites. My skill set includes a strong
                foundation in JavaScript, HTML, and CSS, enabling me to develop
                responsive and interactive web interfaces with precision. I am
                proficient in React and Next.js for frontend development, and
                Angular for enterprise applications. Currently working in the
                automotive sector using Angular 11, TypeScript, Angular Material,
                and RxJS. Through my experience with SASS, I am adept at applying
                advanced styling techniques to align with given design
                specifications.
              </Typography>
              <Typography variant="body1" gutterBottom>
                My backend capabilities include Node.js, MongoDB, C#, .NET, and
                SQL, ensuring robust server-side functionality and effective
                database management. In my current role, I support the Backend team
                with C#, .NET framework and SQL while developing new features, bug
                fixing, and performance improvements on the frontend. I utilize
                tools like Material-UI, Angular Material, and Bootstrap to
                faithfully implement designs with a keen eye for detail. Proficient
                in Git and Azure DevOps for version control and collaboration, and
                skilled in using Postman for API testing, I ensure that the
                technical aspects of web development are handled with utmost
                efficiency.
              </Typography>
            </Paper>
          </FadeInWhenVisible>
        </Container>
        <LinkButton to="/domenico-portfolio/stack" />
      </Card>
    </div>
  );
};

export default StackList;
