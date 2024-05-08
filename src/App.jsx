import Home from "./components/HomePage/Home";
import NavigationBar from "./components/NavyFolder/NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
