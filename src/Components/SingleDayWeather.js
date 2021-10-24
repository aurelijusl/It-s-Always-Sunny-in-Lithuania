import Weather from "./Weather";

const SingleDayWeather = (props) => {
  const stamps = props.forecastTimestamps;
  const day = props.day;
  const weekday = props.weekday;

  return (
    <tr>
      <td className="day">{day === new Date().getDay() ? "Today" : weekday}</td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={6} handleClick={props.handleClick} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={10} handleClick={props.handleClick} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={14} handleClick={props.handleClick} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={18} handleClick={props.handleClick} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={22} handleClick={props.handleClick} />
      </td>
    </tr>
  );
};

export default SingleDayWeather;
