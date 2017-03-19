import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import GetCityContainer from '../containers/GetCityContainer';
import Navbar from '../components/Navbar';
import ForecastComponent from '../components/ForecastComponent';

var routes = (
  <Router>
    <div id="container" >
      <Navbar />
      <Route exact path="/" component={HomeContainer} />
      <Route path="/forecast/:city" component={ForecastComponent} />
    </div>
  </Router>
);

module.exports = routes;
