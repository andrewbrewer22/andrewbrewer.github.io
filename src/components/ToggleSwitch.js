import React, { useState } from "react";
import "../styles/ToggleSwitch.css";
import "../styles/fonts.css";

var unitofmeasurment = "";
var heightMeasurment = "";
var weightMeasurment = "";

function ToggleSwitch() {
  var ImperialBoolean = true;
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  var metric = document.getElementById("imperial");
  var imperial = document.getElementById("metric");
  
  return (
    <div className="userInput-container">
      <div id="imperial" className="imperial">Imperial</div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      <div id="metric" className="metric">Metric</div>
    </div>
  );

  /*Fix color assignments of variables*/
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
export default ToggleSwitch;
