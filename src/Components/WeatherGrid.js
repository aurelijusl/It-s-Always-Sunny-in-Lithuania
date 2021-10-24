import Card from "./Card";
import "./WeatherGrid.css";
import { useState, useEffect } from "react";
import SingleDayWeather from "./SingleDayWeather";

const WeatherGrid = ({ weather }) => {
  const stamps = weather.forecastTimestamps;
  const forecastDays = [
    {
      weekday: "Sunday",
      day: 0,
    },
    {
      weekday: "Monday",
      day: 1,
    },
    {
      weekday: "Tuesday",
      day: 2,
    },
    {
      weekday: "Wednesday",
      day: 3,
    },
    {
      weekday: "Thursday",
      day: 4,
    },
    {
      weekday: "Friday",
      day: 5,
    },
    {
      weekday: "Saturday",
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
              <th>02:00</th>
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
