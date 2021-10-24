import Card from "./Card";
import "./WeatherGrid.css";
import { useState, useEffect } from "react";
import SingleDayWeather from "./SingleDayWeather";

const WeatherGrid = ({ weather, handleClick }) => {
  const stamps = weather.forecastTimestamps;
  const forecastDays = [
    {
      weekday: "Sun",
      day: 0,
    },
    {
      weekday: "Mon",
      day: 1,
    },
    {
      weekday: "Tue",
      day: 2,
    },
    {
      weekday: "Wed",
      day: 3,
    },
    {
      weekday: "Thu",
      day: 4,
    },
    {
      weekday: "Fri",
      day: 5,
    },
    {
      weekday: "Sat",
      day: 6,
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
