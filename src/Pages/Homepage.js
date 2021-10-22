import './Homepage.css';
import { useState, useEffect } from 'react';
import SideBar from "../Components/SideBar";

const Homepage = () => {

    const [weatherState, setWeatherState] = useState("rainy");
    const [temperature, setTemperature] = useState(10);

    return (
        <div className="home">
            <SideBar weatherState={weatherState} temp={temperature} />
        </div> 
     );
}
 
export default Homepage;