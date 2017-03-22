import React from 'react';
import WeatherData from '../components/WeatherData.js';

class DetailsContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props.history.location.state);
  }
  render = () => {
    return <div> Details </div>;
  }
}

export default DetailsContainer;
