import "./Weather.css";
import CurrentWeather, {
  CurrentWeatherProps,
} from "../../components/CurrentWeather/CurrentWeather";
import HourlyWeather, {
  HourlyWeatherDetails,
} from "../../components/HourlyWeather/HourlyWeather";

function Weather(props: {
  currently: CurrentWeatherProps;
  hourly: { data: HourlyWeatherDetails[] };
}) {
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
        humidity={humidity}
      />
      <HourlyWeather data={firstSevenDays} />
    </div>
  );
}

export default Weather;
