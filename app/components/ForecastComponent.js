import React from 'react';

class ForecastComponent extends React.Component {
  static defaultProps = {
    city: "Koszalin"
  }

  render = () => {
    return (<div>
      Hello from Forecast Component!
      {this.props.city}
      {this.props.match.params.city || this.props.city}
    </div>);
  }
}

module.exports = ForecastComponent;
