import "./SideBar.css";
import FoundList from "./FoundList";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const SideBar = ({ handleTermChange, weatherForecast }) => {
  const {
    data: places,
    error,
    isPending,
  } = useFetch("https://api.meteo.lt/v1/places");

  const [term, setTerm] = useState("");
  const [foundPlaces, setFoundPlaces] = useState([]);

  useEffect(() => {
    if (term.length > 0) {
      let found = places
        .filter((place) => {
          return place.name.toLowerCase().includes(term.toLowerCase());
        })
        .slice(0, 5);
      if (found.length) {
        setFoundPlaces(found);
      }
    }
  }, [term, places]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="content">
        {isPending && <h1 className="signals">Loading...</h1>}
        {error && <h1 className="signals">Unable to fetch the data.</h1>}

        <SearchBar handleChange={handleChange} />
        {term.length > 0 && (
          <FoundList foundList={foundPlaces} handleChange={handleTermChange} />
        )}
        <div className="weath">
          {weatherForecast ? (
            <h1>{Math.round(weatherForecast.airTemperature)}°</h1>
          ) : (
            <h1>...</h1>
          )}
        </div>
        <div className="chart">
          <h2>Now It's {weatherForecast.conditionCode}</h2>
          <h4>Wind speed: {weatherForecast.windSpeed} </h4>
          <h4>Wind gust: {weatherForecast.windGust} </h4>
          <h4>Wind direction: {weatherForecast.windDirection} </h4>
          <h4>Cloud cover: {weatherForecast.cloudCover} </h4>
          <h4>Sea level pressure: {weatherForecast.seaLevelPressure} </h4>
          <h4>Total precipitation: {weatherForecast.totalPrecipitation}</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
