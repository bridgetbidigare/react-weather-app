import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

    if (loaded) {
    return (
    <div className="row">
        <WeatherForecastDay data={forecast[1]} />
        <WeatherForecastDay data={forecast[2]} />
        <WeatherForecastDay data={forecast[3]} />
        <WeatherForecastDay data={forecast[4]} />
        <WeatherForecastDay data={forecast[5]} />
    </div>
    );
    } else {
        const apiKey = "75c66def1228b9939b902b974cffcda2";
        let lon = props.coord.lon;
        let lat = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}