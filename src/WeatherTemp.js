import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahr");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius"); 
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahr"); 
  }

  if (unit === "fahr") {
    return (
     <div>
        <h1>
        <span id="degree-temp">{Math.round(props.fahr)}</span>
        <span id="degree-symbol">°F</span>
       </h1>
      <span className="celsius" id="celsius" title="Celsius">
        <a href="/" onClick={showCelsius} className="celsius">
          °C
        </a>
      </span>
     </div>
    );
    } else {
        return (
        <div>
            <h1>
            <span id="degree-temp">{Math.round(((props.fahr - 32) * 5) / 9)}</span>
            <span id="degree-symbol">°C</span>
            </h1>
            <span className="celsius" id="celsius" title="Celsius">
            <a href="/" onClick={showFahr} className="celsius">
            °F
            </a>
            </span>
        </div> 
        );
    }
}