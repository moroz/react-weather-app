import React from 'react';
import WeatherData from '../components/WeatherData';
import APIHelper from '../utils/APIHelper';
import Header from '../components/Header';

class ForecastContainer extends React.Component {
  state = {
    isLoading: true,
    weatherInfo: {},
  }

  componentDidMount = () => {
    var cityName = this.props.match.params.city;
    APIHelper.getWeather(cityName).then(info => {
      this.setState({
        isLoading: false,
        weatherInfo: info.data
      })
    });
  }

  handleClick = (weather) => {
    window.weatherData = weather;
    this.props.history.push({
      pathname: '/details/' + this.props.match.params.city,
      state: {
        weather: weather
      }
    })
  }

  render = () => {
    if (this.state.isLoading) {
      return <div>LOADING</div>;
    } else {
      var city = this.state.weatherInfo.city;
      var days = this.state.weatherInfo.list.map(day => {
        return <WeatherData key={day.dt} day={day} handleClick={this.handleClick.bind(null, day)} />;
      });
      return (
        <div>
          <Header text={city.name + ", " + city.country} />
          {days}
        </div>
      );
    }
  }
}

export default ForecastContainer;
