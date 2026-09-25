import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

// Pages are lazy loaded: each route is downloaded only when it is visited
const PageContent = lazy(() => import("./components/PageContent/PageContent"));
const AboutDetail = lazy(() => import("./components/About/AboutDetail"));
const StackDetail = lazy(() => import("./components/Stack/StackDetail"));
const ProjectsList = lazy(() => import("./components/Projects/ProjectsList"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <div className={classes.app}>
      <a href="#main-content" className={classes.skipLink}>
        Skip to content
      </a>
      <Header />
      <main id="main-content" role="main" className={classes.main}>
        <Suspense
          fallback={<div className={classes.pageLoader} role="status" aria-label="Loading" />}
        >
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
        </Suspense>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
