import React from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends React.Component {
  state = {
    cityName: ''
  }

  static defaultProps = {
    horizontal: false,
    placeholder: "Eg. Taipei..."
  }

  handleSubmitCity = (e) => {
    e.preventDefault();
    console.log(this.props.history.location);
    this.props.history.push({
      pathname: '/forecast/' + this.state.cityName,
      state: {
        cityName: this.state.cityName
      }
    });
    this.setState({
      cityName: ''
    });
  }

  handleUpdateCity = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  render = () => {
    return (<GetCity cityName={this.state.cityName} onSubmitCity={this.handleSubmitCity} onUpdateCity={this.handleUpdateCity} key="home-gc" horizontal={this.props.horizontal} />);
  }
}

export default GetCityContainer;
