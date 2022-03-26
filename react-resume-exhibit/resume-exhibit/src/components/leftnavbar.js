import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

//style
import "../styles/boldStyle.css";

/*
export default className Leftnavbar extends React.Component {
  render() {
    return (
      <section className="leftbreak">
        <div className="contact-info">
          <span className="br" id="bold-this">
            Front-End Developer
          </span>
          <span className="br">Andrew Brewer</span>
          <span className="br">253-244-8669</span>
          <span className="br">andrewwilsonbrewer22@gmail.com</span>

          <hr className="divider-line"></hr>
        </div>
        <div className="resources">
          <span className="br">Programming Languages:</span>
          <span className="br" id="bold-this">
            {" "}
            HTML, CSS, JS, C#
          </span>
          <span className="br">Frameworks and Libraries:</span>
          <span className="br" id="bold-this">
            React
          </span>
          <span className="br">blahblahblah:</span>
          <span className="br" id="bold-this">blahblahblah</span>
          <hr className="divider-line"></hr>
        </div>

        <section className="my-projects">
          <span className="br" id="bold-this">My Projects</span>


          <hr classNameName="divider-line"></hr>
        </section>

      </section>
    );
  }
}
*/

function LeftNavbar(){
let navigate = useNavigate();

  return(
    <section className="leftbreak">
        <div className="contact-info">
          <span className="br" id="bold-this">
            Front-End Developer
          </span>
          <span className="br">Andrew Brewer</span>
          <span className="br">253-244-8669</span>
          <span className="br">andrewwilsonbrewer22@gmail.com</span>

          <hr className="divider-line"></hr>
        </div>
        <div className="resources">
          <span className="br">Programming Languages:</span>
          <span className="br" id="bold-this">
            {" "}
            HTML, CSS, JS, C#
          </span>
          <span className="br">Frameworks and Libraries:</span>
          <span className="br" id="bold-this">
            React
          </span>
          <span className="br">blahblahblah:</span>
          <span className="br" id="bold-this">blahblahblah</span>
          <hr className="divider-line"></hr>
        </div>

        <section className="my-projects">
          <span className="br" id="bold-this">My Example Projects</span>

          <span className="br">
            <button onClick={() => {
              navigate("/resume");
            }} id="link-button">
              Resume
            </button>
          </span>

          <span className="br">
            <button onClick={() => {
              navigate("/bmicalc");
            }} id="link-button">
              BMI Calculator
            </button>
          </span>

          <span className="br">
            <button onClick={() => {
              navigate("/ajax");
            }} id="link-button">
              API {" & "} AJAX Example
            </button>
          </span>

          <span className="br">
            <button onClick={() => {
              navigate("/homeBuyer");
            }} id="link-button">
              Find a Home under a price
            </button>
          </span>

          <hr className="divider-line"></hr>
        </section>

      </section>
  );
}

export default LeftNavbar;

