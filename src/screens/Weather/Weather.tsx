import React from "react";
import "./Weather.css";
import CurrentWeather, {
  CurrentWeatherProps,
} from "../../components/CurrentWeather/CurrentWeather";
import HourlyWeather from "../../components/HourlyWeather/HourlyWeather";

function Weather(props: any) {
  const {
    currently: { icon, humidity, temperature },
    hourly: { data },
  } = props;

  const firstSevenDays = data.slice(0, 7);

  return (
    <div className="weather">
      <CurrentWeather
        temperature={temperature}
        icon={icon}
        humidty={humidity}
      />
      <HourlyWeather data={firstSevenDays} />
    </div>
  );
}

export default Weather;
