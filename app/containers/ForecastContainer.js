import React from 'react';
import WeatherData from '../components/WeatherData';
import APIHelper from '../utils/APIHelper';
import Header from '../components/Header';

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

class ForecastContainer extends React.Component {
  state = {
    isLoading: true,
    weatherInfo: {},
    city: {}
  }

  componentDidMount = () => {
    var cityName = this.props.location.state ?
      this.props.location.state.cityName : "Koszalin";
    APIHelper.getWeather(cityName).then(info => {
      console.log(info.data);
      this.setState({
        isLoading: false,
        weatherInfo: info.data
      })
    });
  }

  render = () => {
    if (this.state.isLoading) {
      return <div>LOADING</div>;
    } else {
      var days = this.state.weatherInfo.list.map(day => {
        return <WeatherData key={day.dt} day={day} />;
      });
      var city = this.state.weatherInfo.city;
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
