import "./SearchBar.css";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="text">
      <input
        type="search"
        placeholder="Search location..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBar;
