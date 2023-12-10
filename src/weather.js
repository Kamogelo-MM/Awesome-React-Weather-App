import { useState } from "react";
import React from "react";
import "./weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function HandleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      time: response.data.time,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      country: response.data.coordinates.country,
      windSpeed: response.data.wind.speed,
      wind: response.data.wind.degree,
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      pressure: Math.round(response.data.temperature.pressure),
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  function handleSubmit() {
    let apiKey = " ff34aa210561032bc3252bb6a9do1e5t";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="weather border p-3">
        <div className="row">
          <div className="search" onSubmit={handleSubmit}>
            <div className="col-sm-6 ">
              <input
                className="form-control"
                autoFocus="on"
                placeholder="Search City..."
              ></input>
            </div>
            <div className="col-sm-3 ">
              <button type="submit" class="btn btn-dark">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3 datentime">
          <div className="col-sm-6 date ">
            <h5>Saturday,09/12/2023</h5>
          </div>
          <div className="col-sm-6 time">
            <h5>{weatherData.time}</h5>
          </div>
        </div>
        <div className="middle">
          <div className="row">
            <div className="col-2">
              <img src="#" alt="weather icon" />
            </div>
            <div className="col-sm-4">
              <h3>
                {weatherData.city},{weatherData.country}
              </h3>
              <h1>
                {weatherData.temperature}&deg;
                <a href="#">C</a>|<a href="#">F</a>
              </h1>
              <h5 className="mt-1">{weatherData.description}</h5>
            </div>
            <div className="col-sm-6">
              <h6>Feels Like: {weatherData.feels_like}&deg;</h6>
            </div>
          </div>
          <div className="bottom">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li>wind: {weatherData.wind}&deg;</li>
                  <li>windSpeed: {weatherData.windSpeed}</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>pressure: {weatherData.pressure}</li>
                  <li>Humidity: {weatherData.humidity}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ff34aa210561032bc3252bb6a9do1e5t";
    let units = "metric";
    let city = "Paris";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(HandleResponse);

    return "Loading weather";
  }
}
