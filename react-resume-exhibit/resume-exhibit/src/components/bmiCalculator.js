import React from "react";
import "../styles/boldStyle.css";
import ToggleSwitch from "./ToggleSwitch";


export default class BMICalculator extends React.Component {
  render() {
    return (
      <section class="rightbreak">

        <div class="bmi-explanation">
          <p>
            The BMI (Body Mass Index) Calculator is used to determine body fat in an individual based on height and weight.
          </p>
        </div>

        <div class="bmi-input">
          <input class="bmi-inputbox" type="text" name="height" placeholder="Height"/>

          <ToggleSwitch/>

          <input class="bmi-inputbox" type="text" name="weight" placeholder="Weight"/>
        </div>

      </section>
    );
  }
}
