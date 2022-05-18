import React from "react";
import { useNavigate } from "react-router-dom";
//useParams,   Link
import ContactMe from "./contactMe";
//style
import "../styles/mainStyle.css";

function LeftNavbar() {
  let navigate = useNavigate();

  return (
    <section className="leftbreak">
      <span className="leftbreak-background-setter"></span>

      <section className="contact-info">
        <span className="br" id="bold-this">
          Front-End Developer
        </span>
        <span className="br">Andrew Brewer</span>
        {/*
          <span className="br">253-244-8669</span>
          <span className="br">andrewwilsonbrewer22@gmail.com</span>
          */}
        <hr className="divider-line"></hr>
      </section>

      <section className="resources">
      <span className="br" id="bold-this">
          Proficiencies
        </span>
        <span className="br">Programming Languages:</span>
        <span className="br" id="bold-this">
          {" "}
          HTML, CSS, JS
        </span>
        <span className="br">Frameworks and Libraries:</span>
        <span className="br" id="bold-this">
          React
        </span>
        <hr className="divider-line"></hr>
      </section>

      <section className="my-projects">
        <button onClick={() => extendProjectMenu()} className="dropbtn"></button>
        <div id="projectDropdown" className="project-dropdown-content">
          <span className="br">
            <button
              onClick={() => { navigate("/resume"); }}
              id="link-button">Resume</button>
          </span>
          <span className="br">
            <button
              onClick={() => {
                navigate("/bmicalc");
              }}
              id="link-button"
            >
              BMI Calculator
            </button>
          </span>
          <span className="br">
            <button
              onClick={() => {
                navigate("/api");
              }}
              id="link-button"
            >
              API Demonstration
            </button>
          </span>
          <span className="br">
            <button
              onClick={() => {
                navigate("/picturegallery");
              }}
              id="link-button"
            >
              Picture Gallery
            </button>
          </span>
{/*           <span className="br">
            <button
              onClick={() => {
                navigate("/cosmicnumber");
              }}
              id="link-button"
            >
              Cosmic Number
            </button>
          </span> */}
        </div>
      </section>

      {/* <ContactMe /> */}
    </section>
  );
}

export default LeftNavbar;

function extendProjectMenu(){
  document.getElementById("projectDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("project-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*run our contact me server */
// const { exec } = require("child_process");

// exec("node contactmeServer.js", (error, stdout, stderr) => {
//   if (error) {
//       console.log(`error: ${error.message}`);
//       return;
//   }
//   if (stderr) {
//       console.log(`stderr: ${stderr}`);
//       return;
//   }
//   console.log(`stdout: ${stdout}`);
// });