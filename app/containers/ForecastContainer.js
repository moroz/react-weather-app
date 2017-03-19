import React from 'react';
import weatherHelper from '../utils/weatherHelper';

class ForecastContainer extends React.Component {
  componentDidMount = () => {
    console.log(weatherHelper.getWeather(this.props.location.state.cityName));
  }

  render = () => {
    return (<div>
      Hello from Forecast Component!
    </div>);
  }
}

export default ForecastContainer;
