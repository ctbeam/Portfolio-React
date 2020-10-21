import React from "react";
import Project from "../project/Project";
import spImg from "/Users/cameronbeam/CodingBootcamp/Portfolio-React/src/assets/sp.jpg";
import workTrackerImg from "/Users/cameronbeam/CodingBootcamp/Portfolio-React/src/assets/workTracker.gif";
import empDirectoryImg from "../../assets/Employee-Directory.jpg";
import rmImg from "/Users/cameronbeam/CodingBootcamp/Portfolio-React/src/assets/sticker_2060.png";


import "./portfolio.css";

function Portfolio() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Portfolio</h1>
        <div className="row">
          <Project
            key="1"
            name="SportsFinder"
            github="https://github.com/MrBusiness87/Finder-Project1"
            deployed="https://mrbusiness87.github.io/Finder-Project1/index.html"
            description="Create a sports finder application in a group that allows the user to enter the City to display sports events near city"
            image={spImg}
          />
          <Project
            key="2"
            name="Barkleigh's Café and Rescue"
            github="https://wwww.barkleighscafeandrescue.com"
            description="A NonProfit seeking to help bring animals to their forever homes."
            image= {rmImg}
          />
          <Project
            key="3"
            name="Work Tracker"
            github="https://github.com/colinshelton/Work-Tracker"
            deployed="https://w0rktracker.herokuapp.com/"
            description="Everyone that needs their work hours tracked needs to create their own login using email. Once logged in they just simply click Clock In when starting work and Clock Out when finished. This will track and calculate hours. When the employee wants to look at his/her hours for the week click Get Punches and they can see a graph of the hours worked."
            image={workTrackerImg}
          />
          </div>
          <div className="row">
          <Project
            key="4"
            name="Nerdy-Wordy"
            github="https://github.com/MrBusiness87/NERDY_WORDY"
            deployed="https://github.com/MrBusiness87/NERDY_WORDY"
            description="A React Based Word Spelling Game."
            image={rmImg}
          />
    
          <Project
            key="5"
            name="Employee Directory"
            github="https://github.com/ctbeam/Employee-Directory"
            deployed="https://ctbeam.github.io/Employee-Directory/"
            description="Using a random use api, this application makes searching in an employee database simple."
            image={empDirectoryImg}
          />
          <Project
            key="6"
            name="Alex's Hair Therapy"
            github="N/A"
            deployed="N/A"
            description="A Small Business Specializing in Hair Therapy."
            image={rmImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
