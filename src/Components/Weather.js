import Card from "./Card";

const Weather = (props) => {
  let timestamps = props.forecastTimestamps;

  return (
    <div>
      {timestamps &&
        timestamps
          .filter((stamp) => {
            return (
              new Date(stamp.forecastTimeUtc).getDate() === props.day &&
              new Date(stamp.forecastTimeUtc).getMonth() === new Date().getMonth() &&
              new Date(stamp.forecastTimeUtc).getHours() === props.hour
            );
          })
          .map((filtered) => {
            return (
              <Card
                weatherForecast={filtered}
                handleClick={props.handleClick}
                key={filtered.forecastTimeUtc}
              />
            );
          })}
    </div>
  );
};

export default Weather;
