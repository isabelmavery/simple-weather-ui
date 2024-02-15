import React, { useState } from "react";
import "./CurrentWeather.css";
import cloudy from "../../assets/icons/icon-cloudy.png";
import rainy from "../../assets/icons/icon-rainy.png";
import sunny from "../../assets/icons/icon-sunny.png";
import sheep from "../../assets/icons/illustration-sheep.png";
import cow from "../../assets/icons/illustration-cow.png";
import penguin from "../../assets/icons/illustration-penguin.png";

export type CurrentWeatherProps = {
  temperature: number;
  humidty: number;
  icon: string;
};

function CurrentWeather(props: CurrentWeatherProps) {
  const { temperature, humidty } = props;

  // TODO @iavery make "cloudy" class conditional based on data input from icon
  return (
    <div className="current-weather cloudy">
      <div className="weather-details">
        <span>{Math.floor(temperature)}º F </span>
        <img className="weather-icon" src={cloudy} height={126} width={126} />
        <span>{humidty}%</span>
      </div>
      <img className="illustration" src={sheep} />
    </div>
  );
}

export default CurrentWeather;
