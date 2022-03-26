import React from "react";
import "../styles/boldStyle.css";
import ToggleSwitch from "./ToggleSwitch";

/*BMI Formula
Imperial: 703 x weight (lbs) / [height(in)]^2
Metric: weight (kg) / [height (m)]^2
*/
var calculatedBMI = 0;

export default class BMICalculator extends React.Component {

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
      <section class="rightbreak">
        <div class="bmi-explanation">
          <p>
            The BMI (Body Mass Index) Calculator is used to determine body fat
            in an individual based on height and weight.
          </p>
        </div>

        <div class="bmi-input">
          <input
            class="bmi-inputbox"
            type="text"
            name="height"
            placeholder="Height"
            
            /*
            value={this.state.heightValue}
            onChangeHeight={this.onChangeHeight}
            */
            onChange={calculateBMI}
          />

          <ToggleSwitch />

          <input
            class="bmi-inputbox"
            type="text"
            name="weight"
            placeholder="Weight"
            /*
            value={this.state.value}
            onChangeWeight={this.onChangeWeight}
            */

            onChange={calculateBMI}
          />
        </div>

        <div className="bmi-input">Your BMI: {calculatedBMI}</div>
      </section>
    );
  }

  
}

/*BMI Formula
Imperial: 703 x weight (lbs) / [height(in)]^2
Metric: weight (kg) / [height (m)]^2
*/
const calculateBMI = (event)=>{
  var weight = 0;
  var height = 0;

  if(event.target.name === "weight"){
    weight = event.target.value;
  }
  if(event.target.name === "height"){
    height = event.target.value;
  }

  calculatedBMI = (703 * weight / (height^2));

  console.log("bmi: " + calculatedBMI);
}


/*#################Create required fields */