import React from "react";
import classes from "./Stack.module.css";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";
import { Container, Paper, Typography, Box, Chip } from "@mui/material";

const StackList = () => {
  const frontendTechs = ["React", "Next.js", "Angular 11", "TypeScript", "HTML5", "CSS3", "SASS", "Material-UI"];
  const backendTechs = ["Node.js", "C#", ".NET", "SQL", "MongoDB"];
  const tools = ["Git", "Azure DevOps", "Postman"];

  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.iconContainer}>
          <GrMonitor className={classes.iconMonitor} />
        </div>
        <Container component="main">
          <FadeInWhenVisible delay={0.2}>
            <Paper style={{ padding: "30px", marginTop: "20px" }}>
              <Typography variant="h5" gutterBottom style={{ fontWeight: 700, marginBottom: "1.5rem" }}>
                Tech Stack
              </Typography>
              
              <Typography variant="body1" gutterBottom style={{ marginBottom: "2rem", lineHeight: 1.8 }}>
                Frontend Developer with full-stack experience, specializing in transforming designs into 
                functional, responsive web applications. Currently working in the automotive sector.
              </Typography>

              <Box style={{ marginBottom: "2rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  Frontend
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {frontendTechs.map(tech => (
                    <Chip key={tech} label={tech} style={{ backgroundColor: "#00adb5", color: "white", fontWeight: 500 }} />
                  ))}
                </Box>
              </Box>

              <Box style={{ marginBottom: "2rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  Backend & Database
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {backendTechs.map(tech => (
                    <Chip key={tech} label={tech} style={{ backgroundColor: "#2e5c8a", color: "white", fontWeight: 500 }} />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  Tools & DevOps
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {tools.map(tool => (
                    <Chip key={tool} label={tool} style={{ backgroundColor: "#16213e", color: "white", fontWeight: 500 }} />
                  ))}
                </Box>
              </Box>
            </Paper>
          </FadeInWhenVisible>
        </Container>
        <LinkButton to="/domenico-portfolio/stack" />
      </Card>
    </div>
  );
};

export default StackList;
