import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";
import "./index.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  } 

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "75c66def1228b9939b902b974cffcda2";
    let unit = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready) {
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          autocomplete="off"
          className="searchBar col-10"
          onChange={handleCityChange}
        />
        <input
          type="submit"
          value="🔎"
          className="magnifier col-1"
          title="Search"
        />
        <button
          className="locationButton col-1"
          title="Current Location"
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
      <Date rawDate={weatherData.date} />
      <h1>
        <span id="degree-temp">{Math.round(weatherData.temperature)}</span>
        <span id="degree-symbol">°F</span>
      </h1>
      <span className="celsius" id="celsius" title="Celsius">
        <a href="/" className="celsius">
          °C
        </a>
      </span>
      <h2>{weatherData.city}</h2>
      <img src="/media/snowy.png" width="175" alt="" id="weatherImage" />
      <div class="weatherDescription">{weatherData.description}</div>
      <div className="weatherDetails">
        wind speed: {Math.round(weatherData.wind)}mph
        <br />
        humidity: {Math.round(weatherData.humidity)}%
      </div>
    </div>
    );
  } else {
    search();
    return "";
  }
}
