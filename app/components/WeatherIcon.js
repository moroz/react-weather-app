import React from 'react';
import styles from '../styles';

function WeatherIcon (props) {
  var base = './app/images/weather-icons/';
  var src = base + props.code + '.svg';
  return (
    <img src={src} style={styles.squareImg} />
  );
}

WeatherIcon.propTypes = {
  code: React.PropTypes.string.isRequired
};

export default WeatherIcon;
