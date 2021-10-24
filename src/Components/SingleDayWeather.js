import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Weather from "./Weather";

const SingleDayWeather = (props) => {
  const [dayName, setDayName] = useState();
  const weekday = props.weekday;
  const stamps = props.forecastTimestamps;
  const day = props.day;

  useEffect(() => {
    switch (weekday) {
      case 0:
        setDayName("Sun");
        break;
      case 1:
        setDayName("Mon");
        break;
      case 2:
        setDayName("Tue");
        break;
      case 3:
        setDayName("Wed");
        break;
      case 4:
        setDayName("Thu");
        break;
      case 5:
        setDayName("Fri");
        break;
      case 6:
        setDayName("Sat");
        break;
      default:
        setDayName("Unknown");
    }
  }, [weekday]);

  return (
    <tr>
      <td className="day">
        {day === new Date().getDate() ? "Today" : dayName}
      </td>
      <td>
        <Weather
          forecastTimestamps={stamps}
          day={day}
          hour={6}
          handleClick={props.handleClick}
        />
      </td>
      <td>
        <Weather
          forecastTimestamps={stamps}
          day={day}
          hour={10}
          handleClick={props.handleClick}
        />
      </td>
      <td>
        <Weather
          forecastTimestamps={stamps}
          day={day}
          hour={14}
          handleClick={props.handleClick}
        />
      </td>
      <td>
        <Weather
          forecastTimestamps={stamps}
          day={day}
          hour={18}
          handleClick={props.handleClick}
        />
      </td>
      <td>
        <Weather
          forecastTimestamps={stamps}
          day={day}
          hour={22}
          handleClick={props.handleClick}
        />
      </td>
    </tr>
  );
};

export default SingleDayWeather;
