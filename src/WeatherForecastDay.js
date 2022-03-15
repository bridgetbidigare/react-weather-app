import React from "react";
import WeatherForecastIcons from "./WeatherForecastIcons";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°F`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

        return days[day];
    }
    
    return (
        <div className="col w-20">
            <span className="temp"
            >{maxTemp()}
            </span>
            <br />
            <WeatherForecastIcons code={props.data.weather[0].icon} size={30} />
            <br />
            {day()}
        </div>
        )
}