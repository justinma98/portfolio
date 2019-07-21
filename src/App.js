import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}
