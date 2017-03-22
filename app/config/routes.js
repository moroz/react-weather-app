import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar';
import ForecastContainer from '../containers/ForecastContainer';

var routes = (
  <Router>
    <div id="container" >
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/forecast/:city" component={ForecastContainer} />
    </div>
  </Router>
);

module.exports = routes;
