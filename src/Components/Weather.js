import Card from "./Card";

const Weather = (props) => {
  let timestamps = props.forecastTimestamps;

  timestamps = timestamps.filter((stamp) => {
      const d = new Date();
      return new Date(stamp.forecastTimeUtc) <= d.setDate(d.getDate() + 6);
  })

  return (
    <div>
      {timestamps &&
        timestamps
          .filter((stamp) => {
            return (
              new Date(stamp.forecastTimeUtc).getDay() === props.day &&
              new Date(stamp.forecastTimeUtc).getMonth() === new Date().getMonth() &&
              new Date(stamp.forecastTimeUtc).getHours() === props.hour
            );
          })
          .map((filtered) => {
            return (
              <Card
                airTemperature={filtered.airTemperature}
                windSpeed={filtered.windSpeed}
                time={filtered.forecastTimeUtc}
                forecastTimeUtc={filtered.forecastTimeUtc}
                key={filtered.forecastTimeUtc}
              />
            );
          })}
    </div>
  );
};

export default Weather;
