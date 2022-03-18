import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

//style
import "../styles/boldStyle.css";

/*
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


          <hr className="divider-line"></hr>
        </section>

      </section>
    );
  }
}
*/

function LeftNavbar(){
let navigate = useNavigate();

  return(
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

          <span class="br">
            <button onClick={() => {
              navigate("/resume");
            }}>
              Change to Resume
            </button>
          </span>

          <span class="br">
            <button onClick={() => {
              navigate("/bmicalc");
            }}>
              Change to BMI Calculator
            </button>
          </span>

          <hr className="divider-line"></hr>
        </section>

      </section>
  );
}

export default LeftNavbar;