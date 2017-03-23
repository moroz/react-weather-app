import React from 'react';
import WeatherIcon from '../components/WeatherIcon.js';
import weatherHelper from '../utils/weatherHelper';

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function Details (props) {
  var w = props.data;
  var time = weatherHelper.displayTime(w.dt);
  return (
    <div className="weather-details col-sm-12 text-center">
      <h1>{props.city}, {time}</h1>
      <WeatherIcon code={w.weather[0].icon} big />
      <p>Temp: {w.temp.min}-{w.temp.max} C</p>
      <p>Rain: {w.rain} mm</p>
      <p>Pressure: {w.pressure} hPa</p>
      <p>Wind: {w.speed} km/h</p>
      <p>{w.weather[0].description}</p>
    </div>
  );
}

export default Details;
