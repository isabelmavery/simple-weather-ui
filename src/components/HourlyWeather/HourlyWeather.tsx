import locationIcon from "../../assets/icons/location-icon.svg";
import "./HourlyWeather.css";

export type HourlyWeatherDetails = {
  precipProbability: number;
  uvIndex: number;
  windSpeed: number;
  humidity: number;
  temperature: number;
  time: number;
};

function HourlyWeatherTable({ data }: { data: HourlyWeatherDetails[] }) {
  if (!data.length) return <div> No weather information found</div>;

  return (
    <div className="hourly-weather-table">
      <div className="table-title">Next few hours</div>
      <table>
        <tr>
          <th />
          {data.map(({ time }: { time: number }) => (
            <th>
              {new Date(time * 1000).toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
            </th>
          ))}
        </tr>
        <tr className="weather-data-row">
          <td className="weather-label">Temperature</td>
          {data.map(({ temperature }: { temperature: number }) => (
            <td>{Math.floor(temperature)}º F</td>
          ))}
        </tr>{" "}
        <tr className="weather-data-row">
          <td className="weather-label">Humidity</td>
          {data.map(({ humidity }: { humidity: number }) => (
            <td>{Math.floor(humidity * 100)}%</td>
          ))}
        </tr>{" "}
        <tr className="weather-data-row">
          <td className="weather-label">Wind Speed</td>
          {data.map(({ windSpeed }: { windSpeed: number }) => (
            <td>{Math.floor(windSpeed)}</td>
          ))}
        </tr>{" "}
        <tr className="weather-data-row">
          <td className="weather-label"> UV Index</td>
          {data.map(({ uvIndex }: { uvIndex: number }) => (
            <td>{uvIndex}</td>
          ))}
        </tr>{" "}
        <tr className="weather-data-row">
          <td className="weather-label">Rain Prob.</td>
          {data.map(({ precipProbability }: { precipProbability: number }) => (
            <td>{Math.floor(precipProbability)}</td>
          ))}
        </tr>{" "}
      </table>
    </div>
  );
}

function HourlyWeather(props: { data: HourlyWeatherDetails[] }) {
  const { data } = props;
  return (
    <div className="hourly-weather">
      <div className="hourly-heading">
        <div className="hourly-label">weather in</div>
        <div className="hourly-location">
          <span>Riverdog Farm</span>
          <img src={locationIcon} />
        </div>
      </div>
      <HourlyWeatherTable data={data} />
    </div>
  );
}

export default HourlyWeather;
