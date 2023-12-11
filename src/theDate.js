import React from "react";

export default function theDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Seeptember",
    "Novemeber",
    "Decemeber",
  ];

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHour();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let year = [props.date.getFullYear()];

  return (
    <div>
      {day}.{month}.{year}
      {""} {minutes}:{hours}
    </div>
  );
}
