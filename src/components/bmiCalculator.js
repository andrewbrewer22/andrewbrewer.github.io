import React from "react";
import "../styles/bmi.css";

/*BMI Formula
Imperial: 703 x weight (lbs) / [height(in)]^2
Metric: [weight (kg) / height (cm) / height (cm)] x 10,000
*/
var calculatedBMI = 0;
var weight = 0;
var height = 0;
var isImperial = false;

export default class BMICalculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.uomUpdate = this.uomUpdate.bind(this);
  }

  calculateBMI(event) {
    /*BMI Formula
    Imperial: 703 x weight (lbs) / [height(in)]^2
    Metric: [weight (kg) / height (cm) / height (cm)] x 10,000
    */
    if (isImperial) {
      if (event.target.name === "weight") {
        this.weight = event.target.value;
      }

      if (event.target.name === "height") {
        this.height = event.target.value;
      }

      this.calculatedBMI = ((703 * this.weight) / this.height ** 2).toFixed(2);
    } else {
      if (event.target.name === "weight") {
        this.weight = event.target.value;
      }
      if (event.target.name === "height") {
        this.height = event.target.value;
      }

      this.calculatedBMI = (
        (this.weight / this.height / this.height) *
        10000
      ).toFixed(2);
    }

    if (this.calculatedBMI > 0 && this.calculatedBMI !== Infinity) {
      document.getElementById("bmi-calculated").innerHTML =
        "BMI: " + this.calculatedBMI;
    }
  }

  async uomUpdate() {
    isImperial = !isImperial;

    if (isImperial) {
      document.getElementById("uomHeight").innerHTML = "in";
      document.getElementById("uomWeight").innerHTML = "lbs";
    } else {
      document.getElementById("uomHeight").innerHTML = "cm";
      document.getElementById("uomWeight").innerHTML = "kg";
    }
  }

  async componentDidMount() {
    this.uomUpdate();
  }

  render() {
    return (
      <section className="rightbreak portfolio-color-1">
        <div className="bmi-explanation portfolio-color-2">
          <p className="exp-textbox">
            The BMI (Body Mass Index) Calculator is used to determine body fat
            in an individual based on height and weight.
          </p>
        </div>

        <div className="bmi-content portfolio-color-2">

          <div className="bmi-inputbox-container" >
            <input
              className="bmi-inputbox"
              type="text"
              name="height"
              placeholder="Height"
              id="height"
              onChange={this.calculateBMI}
            />
            <span id="uomHeight"></span>
            <input
              className="bmi-inputbox"
              type="text"
              name="weight"
              placeholder="Weight"
              id="weight"
              onChange={this.calculateBMI}
            />
            <span id="uomWeight"></span>
          </div>

          {/*Toggle Switch*/}
          <div className="checkbox-container">
            <div id="imperial-placeholder" className="imperial-placeholder">
              Imperial
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                onChange={this.uomUpdate}
              />
              <span className="switch" />
            </label>
            <div id="metric-placeholder" className="metric-placeholder">
              Metric
            </div>
          </div>
          {/*Toggle Switch*/}
        </div>

        <div className="bmi-content portfolio-color-2" id="bmi-calculated">
          BMI:{" "}
        </div>
      </section>
    );
  }
}

/* function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  if (isToggled) {
    isImperial = false;
  } else {
    isImperial = true;
  }

  return (
    <div className="userInput-container">
      <div id="imperial-placeholder" className="imperial-placeholder">
        Imperial
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <div id="metric-placeholder" className="metric-placeholder">
        Metric
      </div>
    </div>
  );


  if (isToggled) {
    metric.style.color = 'rgb(66, 56, 25)';
    metric.style.backgroundColor = 'rgba(174, 137, 16,0)';

    imperial.style.color = 'rgb(174, 137, 16)';
    imperial.style.backgroundColor = 'rgb(66, 56, 25)';
  } else if(!isToggled) 
  {
    metric.style.color = 'rgb(174, 137, 16)';
    metric.style.backgroundColor = 'rgb(66, 56, 25)';
    
    imperial.style.color = 'rgb(66, 56, 25)';
    imperial.style.backgroundColor = 'rgba(174, 137, 16,0)';
  }
}
 */