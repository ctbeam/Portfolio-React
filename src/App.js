import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PortfolioContainer from "./components/PorfolioContainer";
import Footer from "./components/footer/Footer.js";
import resume from "../src/assets/resume.pdf";

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <Footer href={resume} />
    </div>
  );
}

export default App;
