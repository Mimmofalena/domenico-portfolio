import { Routes, Route, Link, Switch } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import AboutDetail from "./components/About/AboutDetail";
import ProjectsDetail from "./components/Projects/ProjectsDetail";
import StackDetail from "./components/Stack/StackDetail";
import { useEffect } from "react";
import AboutList from "./components/About/AboutList";
import ProjectsList from "./components/Projects/ProjectsList";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.main}>
        <Routes>
          <Route path="/domenico-portfolio/" element={<PageContent />} />
          <Route path="/domenico-portfolio/about" element={<AboutList />} />
          <Route
            path="/domenico-portfolio/projects"
            element={<ProjectsList />}
          />
          <Route path="/domenico-portfolio/stack" element={<StackDetail />} />

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
