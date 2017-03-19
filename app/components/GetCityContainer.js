import React from 'react';

class GetCityContainer extends React.Component {
  handleUpdateCity = () => {
  }

  handleSubmitCity = () => {
  }

  render = () => {
    return (
      <div className="col-sm-4 col-sm-offset-4">
        <input type="text" onChange={this.handleUpdateCity} className="form-control" placeholder="Eg. Taipei..." />
        <button className="btn btn-primary" onClick={this.handleSubmitCity}>Get Weather</button>
      </div>
    );
  }
}

export default GetCityContainer;
