import React from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="weather border p-3">
      <div className="row">
        <div className="search">
          <div className="col-sm-6 ">
            <input
              className="form-control"
              autoFocus="on"
              placeholder="Search City..."
            ></input>
          </div>
          <div className="col-sm-3 ">
            <button type="button" class="btn btn-dark">
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
          <h5>05:30 AM</h5>
        </div>
      </div>
      <div className="middle">
        <div className="row">
          <div className="col-2">
            <img src="#" alt="weather icon" />
          </div>
          <div className="col-sm-4">
            <h1>
              19&deg;
              <a href="#">C</a>|<a href="#">F</a>
            </h1>
            <h5>mostly cloudy</h5>
          </div>
          <div className="col-sm-6">
            <h6>RealFeel 12&deg;</h6>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <div className="col-sm-6">
              <ul>
                <li>wind</li>
                <li>Humidity</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>pressure</li>
                <li>rain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
