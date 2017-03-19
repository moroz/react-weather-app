import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import GetCityContainer from '../containers/GetCityContainer';
import Navbar from '../components/Navbar';
import ForecastContainer from '../containers/ForecastContainer';

var routes = (
  <Router>
    <div id="container" >
      <Navbar />
      <Route exact path="/" component={GetCityContainer} />
      <Route path="/forecast/:city" component={ForecastContainer} />
    </div>
  </Router>
);

module.exports = routes;
