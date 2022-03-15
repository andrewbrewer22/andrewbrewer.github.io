import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//style
import "../../styles/landing-page-style.css";
//other pages
import BMICalculator from "../../pages/bmiPage/bmi-page";

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
          <span class="br" id="bold-this">
            blahblahblah
          </span>

          <hr class="divider-line"></hr>
        </div>

        <this.userLinks></this.userLinks>
      </section>
    );
  }

  userLinks() {
    return (
      <Router>
        <div class="my-links">
          <hr class="divider-line"></hr>
        </div>

        <div class="my-projects">
          <link class="br" to="bmiCalc">
            BMI Calculator
          </link>
          <hr class="divider-line"></hr>
        </div>

        <switch>
          <Route path="bmiCalc">
            <BMICalculator />
          </Route>
        </switch>
      </Router>
    );
  }
}
