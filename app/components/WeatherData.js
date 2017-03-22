import React from 'react';
import weatherHelper from '../utils/weatherHelper';
import WeatherIcon from './WeatherIcon';

class WeatherData extends React.Component {

  render = () => {
    var w = this.props.day;
    var time = weatherHelper.parseTime(w.dt);
    return (
      <div className="weather-data col-sm-4 text-center" onClick={this.props.handleClick} >
        <WeatherIcon code={w.weather[0].icon} />
        <p>{time.toDateString()}</p>
        <p>Temp: {w.temp.day} C</p>
        <p>Rain: {w.rain} mm</p>
        <p>{w.weather[0].description}</p>
      </div>
    );
  }
}

WeatherData.propTypes = {
  day: React.PropTypes.object.isRequired
};

export default WeatherData;
