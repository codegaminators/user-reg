import React from "react";
import "./styles/index.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/users">
          <UserPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
