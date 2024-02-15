import Weather from "./screens/Weather/Weather";
import data from "./data/weather-data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather currently={data.currently} hourly={data.hourly} />
    </div>
  );
}

export default App;
