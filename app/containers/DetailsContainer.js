import React from 'react';
import BackButton from '../components/BackButton.js';
import Details from '../components/Details.js';
import { Redirect } from 'react-router-dom';

class DetailsContainer extends React.Component {
  state = {
    weatherData: {}
  }
  componentWillMount = () => {
    if (this.props.history.location.state) {
      this.setState({
        weatherData: this.props.history.location.state.weather,
      });
    }
  }
  render = () => {
    if (!this.props.history.location.state) {
      return (<Redirect to={"/forecast/" + this.props.match.params.city} />);
    }
    return (<div>
      <div className="col-sm-2">
        <BackButton handleClick={this.props.history.goBack} />
      </div>
      <div className="col-sm-8 text-center">
        <Details data={this.state.weatherData} city={this.props.match.params.city} />
      </div>
      <div className="col-sm-2" />
      </div>);
  }
}

export default DetailsContainer;
