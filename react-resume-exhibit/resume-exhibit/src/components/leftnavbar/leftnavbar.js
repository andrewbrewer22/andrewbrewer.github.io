import React from "react";
import '../../styles/landing-page-style.css';

export default class Leftnavbar extends React.Component {

    render() {
        return (
            <section class="leftbreak">

                <div class="contact-info">
                    <span class="br" id="bold-this">Front-End Developer</span>
                    <span class="br">Andrew Brewer</span>
                    <span class="br">253-244-8669</span>
                    <span class="br">andrewwilsonbrewer22@gmail.com</span>


                    <hr class="divider-line"></hr>
                </div>

                <div class="resources">
                    <span class="br">Programming Languages:</span>
                    <span class="br" id="bold-this"> HTML, CSS, JS, C#</span>
                    <span class="br">Frameworks and Libraries:</span>
                    <span class="br" id="bold-this">React</span>
                    <span class="br">blahblahblah:</span>
                    <span class="br" id="bold-this">blahblahblah</span>

                    <hr class="divider-line"></hr>
                </div>

                <div class="my-links">
                    <a class="br" href="../../bmiPage/bmi-page.js">My Links</a>
                    <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>
                    <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>
                    <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>

                    <hr class="divider-line"></hr>
                </div>

                <div class="my-projects">
                    <a class="br" href="../BMIcalc/bmi-index.html">My Projects</a>
                    <a class="br" href="../../bmiPage/bmi-page.js">BMI Calculator</a>
                    <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>
                    <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>

                    <hr class="divider-line"></hr>
                </div>
            </section>
        );

    }
}