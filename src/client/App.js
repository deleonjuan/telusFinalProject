import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";
// You can think of these components as "pages"
// in your app.
import PomodoroApp from "./Apps/01 Pomodoro";
import MaskedInputApp from "./Apps/02 MaskedInput";
import JSONtoCSV from "./Apps/03 JSONtoCSV";
import URLShortener from "./Apps/04 URLShortener";
import OneTimeSecret from "./Apps/05 One time Secret";

const App = () => {
  return (
    <Router>
      <div id="menu" className="d-flex flex-row gap-3 bg-black ps-3">
        <Link to="/">Home</Link>
        <Link to="/pomodoro">Pomodoro</Link>
        <Link to="/masked-input">Masked Input</Link>
        <Link to="/json-to-csv">JSON to CSV</Link>
        <Link to="/url-shortener">URLShortener</Link>
        <Link to="/one-time-secret">1 time secret</Link>
      </div>

      <div className="overflow-auto">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pomodoro">
            <PomodoroApp />
          </Route>
          <Route exact path="/masked-input">
            <MaskedInputApp />
          </Route>
          <Route exact path="/json-to-csv">
            <JSONtoCSV />
          </Route>

          <Route exact path="/url-shortener">
            <URLShortener />
          </Route>
          <Route exact path="/url-shortener/:urlHash">
            <URLShortener />
          </Route>

          <Route exact path="/one-time-secret">
            <OneTimeSecret />
          </Route>
          <Route exact path="/one-time-secret/:secretcode">
            <OneTimeSecret />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of this components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export default App;
