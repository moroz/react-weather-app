import React from 'react';
import WeatherData from '../components/WeatherData.js';
import BackButton from '../components/BackButton.js';

class DetailsContainer extends React.Component {
  componentDidMount = () => {
    console.log(this.props.history.location.state);
  }
  render = () => {
    return (<div>
      <h1>Details</h1>
      <BackButton handleClick={this.props.history.goBack} />
      </div>);
  }
}

export default DetailsContainer;
