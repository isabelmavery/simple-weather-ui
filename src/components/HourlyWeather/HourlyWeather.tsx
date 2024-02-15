import React from "react";
import locationIcon from "../../assets/icons/location-icon.svg";
import "./HourlyWeather.css";

function HourlyWeatherTable({ data }: { data: any }) {
  if (!data.length) return <div> No weather information found</div>;

  return (
    <div className="hourly-weather-table">
      <div
        style={{ textAlign: "right", textTransform: "uppercase", fontSize: 13 }}
      >
        Next few hours
      </div>
      <table>
        <tr className="time-row">
          <th />
          {data.map(({ time }: { time: number }) => (
            <th style={{ textTransform: "lowercase", fontSize: 13 }}>
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

function HourlyWeather(props: any) {
  const { data } = props;
  return (
    <div className="hourly-weather">
      <div className="weather-heading">
        <div
          style={{
            textTransform: "uppercase",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          weather in
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ fontSize: 32 }}>Riverdog Farm</span>
          <img src={locationIcon} style={{ width: 32, height: 32 }} />
        </div>
      </div>
      <HourlyWeatherTable data={data} />
    </div>
  );
}

export default HourlyWeather;
