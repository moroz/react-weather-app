import React from 'react';
import { Link } from 'react-router-dom';
import GetCityContainer from '../containers/GetCityContainer.js';
import Header from '../components/Header.js';
require('../styles/common.css');

class HomeContainer extends React.Component {
  render = () => {
    return (
      <div className="get-city-container col-sm-12 text-center">
        <Header text="Check the weather with my fancy app" />
        <h2>Enter city name</h2>
        <GetCityContainer history={this.props.history} />
      </div>
    );
  } 
}

export default HomeContainer;
