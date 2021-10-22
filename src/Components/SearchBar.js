import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search location..."
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
};

export default SearchBar;
