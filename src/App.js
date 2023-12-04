import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home/Home";
import Fun from "./views/fun/Fun";
import Contact from "./views/contact/Contact";
import About from "./views/about/About";
import Work from "./views/work/Work";
import WorkPage from "./views/work/work-page-template/WorkPage";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="fun" element={<Fun />} />
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="works/:name" element={<WorkPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
