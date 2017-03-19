import React from 'react';
import { Link } from 'react-router-dom';
import GetCityContainer from './GetCityContainer.js';

function Home (props) {
  return (
    <div className="col-sm-12 text-center">
      <h2>Enter city name</h2>
      <GetCityContainer />
    </div>
  );
}

module.exports = Home;
