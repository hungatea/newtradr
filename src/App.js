import logo from './newtradr-logo.svg';
import Question from './Question.js';
import React, { useState, useEffect } from "react";
import HomePage from './Components/Home';
import { AboutUs, Survey } from './Components';
import ContactUs from './Components/ContactUs';




function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <AboutUs />} />
          <Route path="/contact" exact component={() => <ContactUs />} />
          <Route path="/survey" exact component={() => <Survey />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
