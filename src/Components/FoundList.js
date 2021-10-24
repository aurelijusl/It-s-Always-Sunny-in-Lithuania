import "./FoundList.css";

const FoundList = (props) => {
  const found = props.foundList;
  const handleSelect = props.handleChange;

  return (
    <div className="foundList">
      {found &&
        found.map((place) => {
          return (
            <div
              className="place"
              key={place.code}
              onClick={() => handleSelect(place.code)}
            >
              <p>{place.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FoundList;
