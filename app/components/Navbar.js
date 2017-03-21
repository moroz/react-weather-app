import React from 'react';
import styles from '../styles';

function Navbar (props) {
  return (
    <div className="navbar--padding navbar--purple" style={styles.navbar}>
      <h2>Fancy Weather App</h2>
    </div>
  );
}

module.exports = Navbar;
