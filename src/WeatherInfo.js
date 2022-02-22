import React from "react";
import WeatherIcon  from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
    <div>
       <h1>
        <span id="degree-temp">{Math.round(props.data.temperature)}</span>
        <span id="degree-symbol">°F</span>
       </h1>
      <span className="celsius" id="celsius" title="Celsius">
        <a href="/" className="celsius">
          °C
        </a>
      </span>
      <h2>{props.data.city}</h2>
      <WeatherIcon
        code={props.data.icon}
        alt={props.data.description}
     />
      <div class="weatherDescription">{props.data.description}</div>
      <div className="weatherDetails">
        wind speed: {Math.round(props.data.wind)}mph
        <br />
        humidity: {Math.round(props.data.humidity)}%
      </div>
    </div>
    );
}