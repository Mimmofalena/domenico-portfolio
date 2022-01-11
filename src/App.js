import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import AboutDetail from "./components/About/AboutDetail";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Routes>
        {/* <Route path="/" >
          <Body />
        </Route>

        <Route path="/about" element={<AboutDetail />}>
          <AboutDetail />
        </Route> */}
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
