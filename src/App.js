import React from "react";
import "./index.css";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;