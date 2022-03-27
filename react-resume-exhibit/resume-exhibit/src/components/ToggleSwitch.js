import React, { useState } from "react";
import "../styles/ToggleSwitch.css"
import "../fonts/Freshman.ttf";
import "../fonts/MKBritishWriting.ttf";
import "../styles/fonts.css";

var unitofmeasurment = "";

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);


  if (isToggled) {
    unitofmeasurment="Metric";
  }
  else {
    unitofmeasurment="Imperial";
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
      <div className="unitofmeasurment">
        {unitofmeasurment}
      </div>
    </label>
  );
}
export default ToggleSwitch;

