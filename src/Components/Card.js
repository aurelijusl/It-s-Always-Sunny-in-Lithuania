import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h5>
        {new Date(props.forecastTimeUtc).getDay() === new Date().getDay() &&
        (new Date(props.forecastTimeUtc).getHours() <= new Date().getHours() &&
        new Date(props.forecastTimeUtc).getHours() + 4 > new Date().getHours())
          ? "Now"
          : props.forecastTimeUtc}
      </h5>
      <h2>{Math.round(props.airTemperature)}°</h2>
      <h5>{props.windSpeed} ms</h5>
    </div>
  );
};

export default Card;
