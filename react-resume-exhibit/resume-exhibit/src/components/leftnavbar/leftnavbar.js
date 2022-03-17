import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//style
import "../../styles/landing-page-style.css";
//other pages
import BMICalculator from "../../pages/bmiPage/bmi-page";
import Resume from "../resume/resume";

export default class Leftnavbar extends React.Component {
  render() {
    return (
      <section class="leftbreak">
        <div class="contact-info">
          <span class="br" id="bold-this">
            Front-End Developer
          </span>
          <span class="br">Andrew Brewer</span>
          <span class="br">253-244-8669</span>
          <span class="br">andrewwilsonbrewer22@gmail.com</span>

          <hr class="divider-line"></hr>
        </div>
        <div class="resources">
          <span class="br">Programming Languages:</span>
          <span class="br" id="bold-this">
            {" "}
            HTML, CSS, JS, C#
          </span>
          <span class="br">Frameworks and Libraries:</span>
          <span class="br" id="bold-this">
            React
          </span>
          <span class="br">blahblahblah:</span>
          <span class="br" id="bold-this">blahblahblah</span>
          <hr class="divider-line"></hr>
        </div>

        <section class="my-projects">
          <span class="br" id="bold-this">My Projects</span>
          <Routes>
            <Route path="/" element={<Links />}>

              <Route path="resume" element={<Resume />} />
              <Route path="bmiCalc" element={<BMICalculator />} />

            </Route>
          </Routes>

          <hr className="divider-line"></hr>
        </section>

      </section>
    );
  }
}

function Links() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"resume"}>Resume</Link></li>
          <li><Link to={"bmiCalc"}>BMI Calculator</Link></li>
        </ul>
      </nav>
    </div>
  );
}
