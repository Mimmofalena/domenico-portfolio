import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import AboutDetail from "./components/About/AboutDetail";
import StackDetail from "./components/Stack/StackDetail";

import ProjectsList from "./components/Projects/ProjectsList";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.main}>
        <Routes>
          <Route path="/domenico-portfolio/" element={<PageContent />} />
          <Route path="/domenico-portfolio/about" element={<AboutDetail />} />
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
