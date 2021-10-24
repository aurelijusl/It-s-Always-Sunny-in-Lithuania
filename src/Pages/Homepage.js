import './Homepage.css';
import { useState, useEffect } from 'react';
import SideBar from "../Components/SideBar";
import WeatherGrid from '../Components/WeatherGrid';
import useFetch from '../Hooks/useFetch';

const Homepage = () => {
    const [searchTerm, setSearchTerm] = useState('vilnius');
    const [placeWeather, setPlaceWeather] = useState();
    const { data, error, isPending } = useFetch(`https://api.meteo.lt/v1/places/${searchTerm}/forecasts/long-term`)

    useEffect(() => {
        setPlaceWeather(data);
    }, [data]);
    
    return (
        <div className="home">
            <SideBar handleTermChange={setSearchTerm}/>
            {placeWeather && <WeatherGrid weather={placeWeather} />}
        </div> 
     );
}
 
export default Homepage;