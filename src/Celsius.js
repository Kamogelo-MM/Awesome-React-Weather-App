import React from "react";

export default function WeatherConverter(props) {
  return (
    <div className="WeatherConverter">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
