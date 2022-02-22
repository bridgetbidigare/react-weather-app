import React from "react";
import sunny from "./media/sunny.png";
import moon from "./media/moon.png";
import suncloud from "./media/suncloud.png";
import cloudy from "./media/cloudy.png";
import snowy from "./media/snowy.png";
import rainy from "./media/rainy.png";
import stormy from "./media/stormy.png";

export default function WeatherIcon(props){
    const codeMapping = {
        "01d": sunny,
        "01n": moon,
        "02d": suncloud,
        "02n": moon,
        "03d": cloudy,
        "03n": cloudy,
        "04d": cloudy,
        "04n": cloudy,
        "09d": rainy,
        "09n": rainy,
        "10d": rainy,
        "10n": rainy,
        "11d": stormy,
        "11n": stormy,
        "13d": snowy,
        "13n": snowy,
        "50d": cloudy,
        "50n": cloudy
    }

    return (
        <div>
         <img src={codeMapping[props.code]} alt={props.alt} className="weatherIcon" />
        </div>
    );
}