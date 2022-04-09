import React, { useState } from "react";
import "../styles/ToggleSwitch.css";
import "../fonts/Freshman.ttf";
import "../fonts/MKBritishWriting.ttf";
import "../styles/fonts.css";

var unitofmeasurment = "";
var heightMeasurment = "";
var weightMeasurment = "";

function ToggleSwitch() {
  var ImperialBoolean = true;
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  if (isToggled) {
    unitofmeasurment = "Metric";
    heightMeasurment = "cm";
    weightMeasurment = "kg ";
    ImperialBoolean = false;
  } else {
    unitofmeasurment = "Imperial";
    heightMeasurment = "in";
    weightMeasurment = "lbs";
    ImperialBoolean = true;
  }

  return (
    <div className="userInput-container">
      <div className="imperial">Imperial</div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <div className="metric">Metric</div>
    </div>
  );
}
export default ToggleSwitch;
