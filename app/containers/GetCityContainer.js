import React from 'react';
import { Link } from 'react-router-dom';
import GetCity from '../components/GetCity';

class HomeContainer extends React.Component {
  state = {
    cityName: ''
  }

  handleSubmitCity = (e) => {
    this.props.history.push({
      pathname: '/forecast/' + this.state.cityName,
      state: {
        cityName: this.state.cityName
      }
    });
  }

  handleUpdateCity = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  render = () => {
    return (
      <div className="col-sm-12 text-center">
        <h2>Enter city name</h2>
        <GetCity cityName={this.state.cityName} onSubmitCity={this.handleSubmitCity} onUpdateCity={this.handleUpdateCity} />
      </div>
    );
  } 
}

export default HomeContainer;
