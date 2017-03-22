import React from 'react';
import { Link } from 'react-router-dom';
import GetCity from '../components/GetCity';
import Header from '../components/Header.js';
require('../styles/common.css');

class HomeContainer extends React.Component {
  state = {
    cityName: ''
  }

  handleSubmitCity = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/forecast/' + this.state.cityName,
      state: {
        cityName: this.state.cityName
      }
    });
  }

  handleUpdateCity = (e) => {
    console.log("handleUpdateCity: " + e.target.value);
    this.setState({
      cityName: e.target.value
    });
  }

  render = () => {
    return (
      <div className="get-city-container col-sm-12 text-center">
        <Header text="Check the weather with my fancy app" />
        <h2>Enter city name</h2>
        <GetCity cityName={this.state.cityName} onSubmitCity={this.handleSubmitCity} onUpdateCity={this.handleUpdateCity} key="home-gc" />
      </div>
    );
  } 
}

export default HomeContainer;
