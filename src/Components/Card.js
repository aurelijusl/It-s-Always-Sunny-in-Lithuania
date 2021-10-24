import "./Card.css";

const Card = (props) => {
  const weatherForecast = props.weatherForecast;
  return (
    <div onClick={() => props.handleClick(weatherForecast)} className="card">
      <h5>
        {new Date(weatherForecast.forecastTimeUtc).getDay() === new Date().getDay() &&
        (new Date(weatherForecast.forecastTimeUtc).getHours() <= new Date().getHours() &&
        new Date(weatherForecast.forecastTimeUtc).getHours() + 4 > new Date().getHours())
          ? "Now"
          : weatherForecast.forecastTimeUtc}
      </h5>
      <h2>{Math.round(weatherForecast.airTemperature)}°</h2>
      <h5>{weatherForecast.windSpeed} ms</h5>
    </div>
  );
};

export default Card;
