import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import Celsius from "./Celsius";

export default function WeatherInform(props) {
  return (
    <div className="Weatherinform">
      <div className="row mt-3 datentime">
        <div className="col-sm-6 date ">
          <h5>
            <FormattedDate date={props.data.date} />
          </h5>
        </div>
      </div>
      <div className="middle">
        <div className="row">
          <div className="col-2">
            <WeatherIcon code={props.data.icon} alt="weather icon" />
          </div>
          <div className="col-sm-4">
            <h3>{props.data.city},</h3>
            <p>{props.data.country}</p>
            <h1>
              <Celsius celsius={props.data.temperature} />
            </h1>
            <h5 className="mt-1">{props.data.description}</h5>
          </div>
          <div className="col-sm-4">
            <h6>Feels Like: {props.data.feels_like}&deg;</h6>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>wind: {props.data.wind}&deg;</li>
                <li>windSpeed: {props.data.windSpeed}</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>pressure: {props.data.pressure}</li>
                <li>Humidity: {props.data.humidity}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
