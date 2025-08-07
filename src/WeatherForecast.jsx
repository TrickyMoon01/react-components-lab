import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";
export default function WeatherForecast() {
  return (
    <div className="weather">
      <h2>Day of the Week</h2>
      <WeatherIcon />
      <WeatherData />
    </div>
  );
}
