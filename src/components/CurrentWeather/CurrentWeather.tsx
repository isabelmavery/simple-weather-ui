import "./CurrentWeather.css";
import cloudy from "../../assets/icons/icon-cloudy.png";
import rainy from "../../assets/icons/icon-rainy.png";
import sunny from "../../assets/icons/icon-sunny.png";
import sheep from "../../assets/icons/illustration-sheep.png";
import cow from "../../assets/icons/illustration-cow.png";
import penguin from "../../assets/icons/illustration-penguin.png";

export type CurrentWeatherProps = {
  temperature: number;
  humidity: number;
  icon: string;
};

/**
 * Allows styling of gradient and icons on the current weather card dependening on the
 * "icon" field of "data.currently"
 */
function getWeatherDetailsFromIcon(icon: string) {
  if (icon.includes("cloudy"))
    return {
      className: "cloudy",
      weatherIcon: cloudy,
      illustration: sheep,
    };
  if (icon.includes("rainy"))
    return {
      className: "rainy",
      weatherIcon: rainy,
      illustration: cow,
    };
  return {
    className: "sunny",
    weatherIcon: sunny,
    illustration: penguin,
  };
}

function CurrentWeather(props: CurrentWeatherProps) {
  const { temperature, humidity, icon } = props;
  const { className, weatherIcon, illustration } =
    getWeatherDetailsFromIcon(icon);

  return (
    <div className={`current-weather ${className}`}>
      <div className="weather-details">
        <span>{Math.floor(temperature)}º F </span>
        <img className="weather-icon" src={weatherIcon} />
        <span>{humidity}%</span>
      </div>
      <img className="illustration" src={illustration} />
    </div>
  );
}

export default CurrentWeather;
