import React from "react";
import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherAnimatedIcon code={props.data.condition.icon} size={36} />
        <div className="WeatherForecast-temperature">
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}
          </span>
          <span className="WeatherForecast-temperature-min">
            {minTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
