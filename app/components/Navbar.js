import React from 'react';
import styles from '../styles';
import GetCityContainer from '../containers/GetCityContainer.js';

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar--padding navbar--purple" style={styles.navbar}>
        <h2 style={{margin: '5px'}}>Fancy Weather App</h2>
        <GetCityContainer history={this.props.history} horizontal />
      </div>
    );
  }
}

module.exports = Navbar;
