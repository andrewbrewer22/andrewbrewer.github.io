import React from "react";
import "../styles/resume.css";
import "../fonts/MKBritishWriting.ttf";
import "../styles/fonts.css";

export default class Resume extends React.Component {
  render() {
    return (
      <section class="rightbreak">
        <div>
          <span className="resume-title" id="bold-this">
            Andrew Brewer
          </span>
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
            Thank you for taking the time to check out my website! I created
            this React app from scratch to demonstrate my competency and
            efficiency in coding. I am currently working as a Special Education
            Pre-K assistant in the Frenship Independent School Distract.
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
            Through the Austin Coding Academy I learned the major parts of
            developing a website. Initially <span id="bold-this">github</span>{" "}
            was the class topic, a strong emphasis on{" "}
            <span id="bold-this">version control</span> was prominent. We
            learned <span id="bold-this">HTML</span>,{" "}
            <span id="bold-this">CSS</span>, and{" "}
            <span id="bold-this">Java Script</span> so that we could create{" "}
            <span id="bold-this">Front-End</span> sites and generally learn how
            programming languages worked together. When learning the{" "}
            <span id="bold-this">Back-End</span> side of development we used{" "}
            <span id="bold-this">C#</span> and different
            <span id="bold-this"> Frameworks</span> such as{" "}
            <span id="bold-this">Angular</span>,
            <span id="bold-this"> ASP. NET</span>, and{" "}
            <span id="bold-this">jQuery</span> to learn how a server
            communicates <span id="bold-this">data </span>
            to other servers and the front-end. As well as{" "}
            <span id="bold-this">securing and interpreting</span> said data
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
            During my service in the <span id="bold-this">U.S. Army</span> I
            trained as a{" "}
            <span id="bold-this">Joint Fire Support Specialist</span> (MOS:
            13F). My primary responsibility was to gain{" "}
            <span id="bold-this">accurate target information</span>
            which included{" "}
            <span id="bold-this">
              identification, location, and the correct munitions
            </span>{" "}
            (60mm, 81mm, 120mm mortar systems, 105mm and 155mm artillery
            systems, aircraft and naval batteries) to incapacitate or destroy
            the target in{" "}
            <span id="bold-this">
              support of the advancement of friendly troops.
            </span>
            My secondary responsibility was to{" "}
            <span id="bold-this">maintain</span> radio and gps/satellite{" "}
            <span id="bold-this">equipment</span>, and current location and
            positions of allied troops, and of course all other soldier tasks
            that are required. Another important task was constant{" "}
            <span id="bold-this">communications with our leadership </span>
            regardless of rank or position. This meant that we were to give{" "}
            <span id="bold-this">briefs</span>, or other important information
            to higher ranking officers and Non Commissioned officers in a{" "}
            <span id="bold-this">precise and coherent</span> manner.
          </p>
        </div>
      </section>
    );
  }
}
