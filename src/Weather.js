import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather ">
          <div className="container ">
            <form className="mb-3 shadow">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city.."
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <FormatedDate date={weatherData.date} />
                </li>
              </ul>

              <div className="row ">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <div className="float-left">
                      <strong>{weatherData.temperature}</strong>
                      <span className="units">
                        <a href="/">°C</a> | <a href="/">°F</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li className="text-capitalize">
                      {weatherData.description}
                    </li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <a href="https://github.com/julianaBabii/react-weather-app">
            Open-sourced
          </a>{" "}
          coded by Juliana Babii{" "}
        </p>
      </>
    );
  } else {
    const apiKey = `25d6coae8fb5tfc0aa42170aacf42234`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
