import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import Footer from "./components/Footer/Footer";
import AboutDetail from "./components/About/AboutDetail";
import StackDetail from "./components/Stack/StackDetail";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/UI/ScrollToTop";

import ProjectsList from "./components/Projects/ProjectsList";

function App() {
  return (
    <div className={classes.app}>
      <a href="#main-content" className={classes.skipLink}>
        Skip to content
      </a>
      <Header />
      <main id="main-content" role="main" className={classes.main}>
        <Routes>
          <Route path="/domenico-portfolio/" element={<PageContent />} />
          <Route path="/domenico-portfolio/about" element={<AboutDetail />} />
          <Route
            path="/domenico-portfolio/projects"
            element={<ProjectsList />}
          />
          <Route path="/domenico-portfolio/stack" element={<StackDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
