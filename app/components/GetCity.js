import React from 'react';
import styles from '../styles';

function GetCity (props) {
  return (
    <div className="col-sm-4 col-sm-offset-4">
      <form onSubmit={props.onSubmitCity} >
      <input type="text" onChange={props.onUpdateCity}
        className="form-control" placeholder="Eg. Taipei..."
        value={props.cityName} />
      <button type="submit" className="btn btn--green"
        style={styles.space} onClick={props.onSubmitCity}>
        Get Weather
      </button>
    </form>
    </div>
  );
}

export default GetCity;
