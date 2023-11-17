import "./App.css";

import React from "react";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Main/Projects";
import Home from "./components/Home/Home";
import Praise from "./components/Praise/Praise";
import Footer from './components/Footer/Footer';
import Endfooter from "./components/Footer/Endfooter";


function App() {
  return (
    <div className="App">

      <Home />
      <Achievements />
      <Projects />
      <Praise/>
      <Footer/>
      <Endfooter/>
    </div>
  );
}

export default App;
