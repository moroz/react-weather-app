import React from 'react';

class ForecastComponent extends React.Component {
  componentDidMount = () => {
    console.log(this.props.location.state)
  }

  render = () => {
    return (<div>
      Hello from Forecast Component!
    </div>);
  }
}

module.exports = ForecastComponent;
