import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar';
import ForecastContainer from '../containers/ForecastContainer';
import DetailsContainer from '../containers/DetailsContainer.js';

var routes = (
  <Router>
    <div id="container" >
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/forecast/:city" component={ForecastContainer} />
      <Route path="/details/:city" component={DetailsContainer} />
    </div>
  </Router>
);

module.exports = routes;
