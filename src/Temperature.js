import React from "react";
import "./index.css";

export default function Temperature() {
  return (
    <div>
      <h1>
        <span id="degree-temp">22</span>
        <span id="degree-symbol">°F</span>
      </h1>
      <span className="celsius" id="celsius" title="Celsius">
        <a href="/" className="celsius">
          °C
        </a>
      </span>
      <h2>DENVER</h2>
      <img src="/media/snowy.png" width="175" alt="" id="weatherImage" />
      <div className="windSpeed">
        wind speed: <span id="windSpeed"></span>15mph
      </div>
    </div>
  );
}
