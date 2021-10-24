import Weather from "./Weather";

const SingleDayWeather = (props) => {
  const stamps = props.forecastTimestamps;
  const day = props.day;
  const weekday = props.weekday;

  return (
    <tr>
      <td className="day">{day === new Date().getDay() ? "Today" : weekday}</td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={6} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={10} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={14} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={18} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={22} />
      </td>
      <td>
        <Weather forecastTimestamps={stamps} day={day} hour={2} />
      </td>
    </tr>
  );
};

export default SingleDayWeather;
