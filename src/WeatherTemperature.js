import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">
        <a className="link-light text-decoration-none" href="/">
          °C
        </a>{" "}
      </span>
    </div>
  );
}
