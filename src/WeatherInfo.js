import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.info.city}</h1>
        <ul>
          <li>
            <FormatedDate date={props.info.date} />
          </li>
        </ul>

        <div className="row ">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.info.imgUrl}
                alt={props.info.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{props.info.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{props.info.description}</li>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {props.info.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
