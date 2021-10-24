import React from "react";
import {
  Switch,
  Route,
  HashRouter as Router
} from "react-router-dom";
import HomePage from './Components/Home';
import Navigation from './Components/NavigationBar.js';
import { AboutUs, Survey } from './Components';
import ContactUs from './Components/ContactUs';




function App() {

  return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <AboutUs />} />
          <Route path="/survey" exact component={() => <Survey />} />
        </Switch>
      </Router>
  );
}

export default App;
