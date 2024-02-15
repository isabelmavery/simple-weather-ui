import React from "react";
import Weather from "./screens/Weather/Weather";
import data from "./data/weather-data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather {...data} />
    </div>
  );
}

export default App;
