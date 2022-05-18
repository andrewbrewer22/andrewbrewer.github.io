import React from "react";
import "../styles/resume.css";
import "../fonts/MKBritishWriting.ttf";
import "../styles/fonts.css";

export default class Resume extends React.Component {
  render() {
    return (
      <section class="rightbreak">
        <div>
        <span className="resume-title" id="bold-this">Andrew Brewer</span>
        </div>
        <div>
          <img
            class="self-portrait"
            src={require("../images/Andrew_Brewer.jpg")}
            alt="Andrew_Brewer"
          ></img>
        </div>

        <div class="resume-text">
          <p>
            Thank you for taking the time to check out my website!
          </p>
        </div>

        <div>
          <img
            class="lca-certificate"
            src={require("../images/lcacertificate.png")}
            alt="lcaCertificate"
          ></img>
        </div>

        <div class="resume-text">
          <p>
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
          </p>
        </div>

        <div>
          <img
            class="dirtymike"
            src={require("../images/dirtmikeandtheboys.jpeg")}
            alt="dirtmikeandtheboys"
          ></img>
        </div>

        <div class="resume-text">
          <p>
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
          </p>
        </div>

        <div class="resume-text">
          <p>
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
          </p>
        </div>

        <div class="resume-text">
          <p>
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
            Put some code here for the sake of filling up space on the screen.
          </p>
        </div>

        <div></div>
      </section>
    );
  }
}
