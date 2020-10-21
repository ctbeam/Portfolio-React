import React from "react";
import ProfilePic from "../../assets/profile-picture.png";
import "./home.css";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cameron Beam</h1>
        <div className="container px-lg-5">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={ProfilePic}
                  className="card-img"
                  alt="Cameron Beam"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text" id="homeText">
                   
I live in Raleigh, North Carolina. This is where I have been a one on one direct care work for individuals with intellectual developmental disorders (IDD) for 9 years. At the beginning of 2020 I had decided to make a career change to switch towards programming fields. I have minimal experience in Javascript and C++ prior to taking a Bootcamp Course. Currently in the course I have covered HTML, JS, JQueary, and Node.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
