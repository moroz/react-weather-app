import React from 'react';
import styles from '../styles';
import GetCity from '../components/GetCity.js';

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar--padding navbar--purple" style={styles.navbar}>
        <h2 style={{margin: '5px'}}>Fancy Weather App</h2>
        <GetCity horizontal />
      </div>
    );
  }
}

module.exports = Navbar;
