import { useState } from "react";
import React from "react";
import "./weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInform from "./WeatherInform";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function HandleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      country: response.data.coordinates.country,
      windSpeed: response.data.wind.speed,
      wind: response.data.wind.degree,
      feels_like: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      pressure: Math.round(response.data.temperature.pressure),
      icon: response.data.condition.icon,
      cityName: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault;
    search();
  }

  function HandleCityResponse(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = " ff34aa210561032bc3252bb6a9do1e5t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (WeatherData.ready) {
    return (
      <div className="weather border p-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="search">
              <div className="col-sm-6 ">
                <input
                  className="form-control"
                  autoFocus="on"
                  placeholder="Search City..."
                  onChange={HandleCityResponse}
                ></input>
              </div>
              <div className="col-sm-3 ">
                <button type="submit" className="btn btn-dark">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
        <WeatherInform data={WeatherData} />
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
