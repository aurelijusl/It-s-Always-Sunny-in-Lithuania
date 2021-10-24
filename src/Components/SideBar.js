import "./SideBar.css";
import FoundList from "./FoundList";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const SideBar = ({ handleTermChange }) => {
  const {data: places, error, isPending} = useFetch("https://api.meteo.lt/v1/places");
  const [term, setTerm] = useState("");
  const [foundPlaces, setFoundPlaces] = useState([]);

  useEffect(() => {
    if (term.length > 0) {
      let found = places.filter((place) => {
        return place.name.toLowerCase().includes(term.toLowerCase());
      }).slice(0, 5);
      if (found.length) {
        setFoundPlaces(found);
      }
    }
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="content">
        <SearchBar handleChange={handleChange} />
        { term.length > 0 && <FoundList foundList={foundPlaces} handleChange={handleTermChange} /> }
        <div className="weath">
          <h1>10°</h1>
        </div>
        <div className="chart">
          <h2>Now It's something</h2>
          <h4>Wind speed: </h4>
          <h4>Wind gust: </h4>
          <h4>Wind direction: </h4>
          <h4>Cloud cover: </h4>
          <h4>Sea level pressure: </h4>
          <h4>Total precipitation: </h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
