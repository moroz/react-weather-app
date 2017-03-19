import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../components/Home';
import Navbar from '../components/Navbar.js';
import ForecastComponent from '../components/ForecastComponent.js';

var routes = (
  <Router>
    <div id="container" >
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/forecast/:city" component={ForecastComponent} />
    </div>
  </Router>
);

module.exports = routes;
