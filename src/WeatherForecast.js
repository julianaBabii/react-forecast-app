import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherAnimatedIcon from "./WeatherAnimatedIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
  } else {
    const apiKey = `25d6coae8fb5tfc0aa42170aacf42234`;
    let longitude = props.coordinates.longitude;
    let latitute = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitute}&key=${apiKey}&units`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
