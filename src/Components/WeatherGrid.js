import Card from "./Card";
import "./WeatherGrid.css";
import { useState, useEffect } from "react";
import SingleDayWeather from "./SingleDayWeather";

const WeatherGrid = ({ weather, handleClick }) => {
  const [day, setDay] = useState(new Date());
  const stamps = weather.forecastTimestamps;

  const forecastDays = [
    {
      weekday: day.getDay(),
      day: day.getDate(),
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+1).getDay(),
      day: day.getDate() + 1,
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+2).getDay(),
      day: day.getDate() + 2,
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+3).getDay(),
      day: day.getDate() + 3,
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+4).getDay(),
      day: day.getDate() + 4,
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+5).getDay(),
      day: day.getDate() + 5,
    },
    {
      weekday: new Date(day.getFullYear(),day.getMonth(),day.getDate()+6).getDay(),
      day: day.getDate() + 6,
    },
  ];

  return (
    <div className="weatherGrid">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="empty"></th>
              <th>6:00</th>
              <th>10:00</th>
              <th>14:00</th>
              <th>18:00</th>
              <th>22:00</th>
            </tr>
          </thead>
          <tbody>
            {stamps &&
              forecastDays.map((day) => {
                return (
                  <SingleDayWeather
                    forecastTimestamps={stamps}
                    weekday={day.weekday}
                    day={day.day}
                    handleClick={handleClick}
                    key={day.day}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherGrid;
