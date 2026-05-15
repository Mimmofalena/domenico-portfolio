import React from "react";
import classes from "./Stack.module.css";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { GrMonitor } from "react-icons/gr";
import { Container, Paper, Typography, Box, Chip } from "@mui/material";
import { useLanguage } from "../../contexts/LanguageContext";

const StackList = () => {
  const { t } = useLanguage();
  const frontendTechs = ["Angular", "React", "Next.js", "TypeScript", "RxJS", "Angular Signals", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Angular Material", "Material-UI", "shadcn"];
  const backendTechs = ["Node.js", "C#", ".NET", "SQL", "MongoDB", "Express"];
  const mobileTechs = ["Ionic", "Capacitor", "Angular"];
  const aiTools = ["GitHub Copilot", "N8N", "Ollama", "Opencode"];
  const tools = ["Git", "Azure DevOps", "Postman", "NPM"];

  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.iconContainer}>
          <GrMonitor className={classes.iconMonitor} />
        </div>
        <Container component="main">
          <FadeInWhenVisible delay={0.2}>
            <Paper style={{ padding: "30px", marginTop: "20px" }}>
              <Typography variant="h5" gutterBottom style={{ fontWeight: 700, marginBottom: "2.5rem", textAlign: "center" }}>
                {t("stackPage.title")}
              </Typography>

              <Box style={{ marginBottom: "2.5rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  {t("stackPage.frontend")}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {frontendTechs.map(tech => (
                    <Chip key={tech} label={tech} style={{ backgroundColor: "#00adb5", color: "white", fontWeight: 500, fontSize: "0.9rem", padding: "0.5rem" }} />
                  ))}
                </Box>
              </Box>

              <Box style={{ marginBottom: "2.5rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  {t("stackPage.backendDatabase")}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {backendTechs.map(tech => (
                    <Chip key={tech} label={tech} style={{ backgroundColor: "#2e5c8a", color: "white", fontWeight: 500, fontSize: "0.9rem", padding: "0.5rem" }} />
                  ))}
                </Box>
              </Box>

              <Box style={{ marginBottom: "2.5rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  {t("stackPage.mobile")}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {mobileTechs.map(tech => (
                    <Chip key={tech} label={tech} style={{ backgroundColor: "#0891b2", color: "white", fontWeight: 500, fontSize: "0.9rem", padding: "0.5rem" }} />
                  ))}
                </Box>
              </Box>

              <Box style={{ marginBottom: "2.5rem" }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  {t("stackPage.aiTools")}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {aiTools.map(tool => (
                    <Chip key={tool} label={tool} style={{ backgroundColor: "#6d28d9", color: "white", fontWeight: 500, fontSize: "0.9rem", padding: "0.5rem" }} />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "1rem", color: "#0f3460" }}>
                  {t("stackPage.toolsDevops")}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {tools.map(tool => (
                    <Chip key={tool} label={tool} style={{ backgroundColor: "#16213e", color: "white", fontWeight: 500, fontSize: "0.9rem", padding: "0.5rem" }} />
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
