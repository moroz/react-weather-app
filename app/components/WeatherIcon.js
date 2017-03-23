import React from 'react';
import styles from '../styles';

function WeatherIcon (props) {
  var base = './app/images/weather-icons/';
  var src = base + props.code + '.svg';
  var style = props.big ? styles.squareImgBig : styles.squareImg;
  return (
    <img src={src} style={style} />
  );
}

WeatherIcon.propTypes = {
  code: React.PropTypes.string.isRequired
};

export default WeatherIcon;
