import React from 'react';
import styles from '../styles';

function GetCity (props) {
  return (
    <div className="col-sm-4 col-sm-offset-4">
      <input type="text" onChange={props.onUpdateCity}
        className="form-control" placeholder="Eg. Taipei..."
        value={props.cityName} />
      <button className="btn btn-primary"
        style={styles.space} onClick={props.onSubmitCity}>
        Get Weather
      </button>
    </div>
  );
}

export default GetCity;
