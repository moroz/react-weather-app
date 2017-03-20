import React from 'react';
import weatherHelper from '../utils/weatherHelper';

function WeatherData (props) {
  var w = props.day;
  var time = weatherHelper.parseTime(w.dt);
  return (
    <div className="col-sm-4" style={{height: '18em'}}>
      <img src='./app/images/weather-icons/10d.svg' />
      <p>{time.toDateString()}</p>
      <p>Temp: {w.temp.day} C</p>
      <p>Rain: {w.rain} mm</p>
      <p>{w.weather[0].description}</p>
    </div>
  );
}

WeatherData.propTypes = {
  day: React.PropTypes.object.isRequired
};

export default WeatherData;
