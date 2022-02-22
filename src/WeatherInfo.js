import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return (
    <div>
        <WeatherTemp fahr={props.data.temperature} />
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