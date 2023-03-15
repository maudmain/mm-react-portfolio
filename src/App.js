
// Importing the necessary packages from React
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// When a user navigates to a different URL within the same application, <HashRouter> intercepts that URL and updates the browser's URL hash, without actually sending a request to the server. This allows the application to maintain the appearance of being a multi-page application while still being a single-page application
// = easier to set up with GitHub pages

// Importing style
import "./index.css";

// Importing components
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Contact } from "./Pages/Contact";


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
