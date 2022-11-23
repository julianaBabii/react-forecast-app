import React from "react";
import "./WeatherForecast.css";
import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wen</div>
          <div>
            <WeatherAnimatedIcon code={"snow-day"} size={42} />
          </div>
          <span className="WeatherForecast-temperature-max">
            <strong>10°</strong>
          </span>
          <span className="WeatherForecast-temperature-min">5°</span>
        </div>
      </div>
    </div>
  );
}
