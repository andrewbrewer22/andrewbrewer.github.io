import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//other pages
import BMICalculator from "../../pages/bmiPage/bmi-page";


export default function userLinks () {
    return(
        <Router>
                    <div class="my-links">
                        <a class="br" href="../../bmiPage/bmi-page.js">My Links</a>
                        <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>
                        <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>
                        <a class="br" href="../BMIcalc/bmi-index.html">Link Here</a>

                        <hr class="divider-line"></hr>
                    </div>

                    <div class="my-projects">
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <link class="br" to="bmiCalc">BMI Calculator</link>
                                    </li>
                                </ul>
                            </nav>

                            <switch>
                                <Route path="bmiCalc">
                                    <BMICalculator />
                                </Route>
                            </switch>

                        </div>
                        
                        <hr class="divider-line"></hr>
                    </div>
        </Router>
    );
}