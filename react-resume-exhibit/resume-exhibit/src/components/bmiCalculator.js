import React from "react";
import "../styles/boldStyle.css";
import ToggleSwitch from "./ToggleSwitch";

/*BMI Formula
Imperial: 703 x weight (lbs) / [height(in)]^2
Metric: [weight (kg) / height (cm) / height (cm)] x 10,000
*/
var calculatedBMI = 0;
var weight = 0;
var height = 0;
var imperial = true;

export default class BMICalculator extends React.Component {

  constructor(props) {
    super(props);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  calculateBMI(event) {
    /*BMI Formula
    Imperial: 703 x weight (lbs) / [height(in)]^2
    Metric: [weight (kg) / height (cm) / height (cm)] x 10,000
    */



    if (imperial) {/*Imperial*/
      if (event.target.name === "weight") {
        this.weight = event.target.value;
      }
      if (event.target.name === "height") {
        this.height = event.target.value;
      }

      this.calculatedBMI = ((703 * this.weight) / (this.height ** 2)).toFixed(2);
    }
    else{/*Metric*/
      if (event.target.name === "weight") {
        this.weight = event.target.value;
      }
      if (event.target.name === "height") {
        this.height = event.target.value;
      }

      this.calculatedBMI = ((this.weight / this.height / this.height)*10000).toFixed(2);
    }

  }

  /*
  constructor(props) {
    super(props);
    this.state = { heightValue: '', weightValue: '', RegExp: /^[0-9\b]+$/ };

    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
  }

  onChangeHeight(e) {
    let heightValue = e.target.value;

    if(heightValue === '' || this.state.RegExp.test(heightValue)) {
      this.setState({ [e.target.value]: heightValue})
    }


  }

  onChangeWeight(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }
*/
  render() {
    return (
      <section className="rightbreak">
        <div className="bmi-explanation">
          <p>
            The BMI (Body Mass Index) Calculator is used to determine body fat
            in an individual based on height and weight.
          </p>
        </div>

        <div className="bmi-input">
          <input
            className="bmi-inputbox"
            type="text"
            name="height"
            placeholder="Height"

            /*
            value={this.state.heightValue}
            onChangeHeight={this.onChangeHeight}
            */
            onChange={this.calculateBMI}
          />

          <ToggleSwitch />

          <input
            className="bmi-inputbox"
            type="text"
            name="weight"
            placeholder="Weight"
            /*
            value={this.state.value}
            onChangeWeight={this.onChangeWeight}
            */

            onChange={this.calculateBMI}
          />
        </div>

        <div className="bmi-input">Your BMI: {this.calculatedBMI}</div>
      </section>
    );
  }
}
