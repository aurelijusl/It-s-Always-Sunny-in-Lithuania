import "./SideBar.css";
import SearchBar from "./SearchBar";
import Whatever from "../Icons/Group39.svg";
import Okay from "../Icons/Group 118.svg";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div class="content">
        <SearchBar />
        <div class="weath">
          <img src={Okay} alt="" />
          <h1>{props.temp}°</h1>
        </div>
        <div class="chart">
          <h2>Now It's {props.weatherState}</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
