import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import TopBar from "./Components/TopBar.js";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
