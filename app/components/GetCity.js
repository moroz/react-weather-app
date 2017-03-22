import React from 'react';
import styles from '../styles';
var PropTypes = React.PropTypes;

function TextInput (props) {
  return (<input type="text" onChange={props.onUpdateCity}
    className="form-control"  placeholder="Eg. Taipei..."
    value={props.cityName} />);
}
function Submit (props) {
  return (<button type="submit" className="btn btn--green"
    style={{margin: '10px'}} onClick={props.onClick}>
    Get Weather
  </button>);
}

function GetCity (props) {
  if (props.horizontal) {
    var className = "";
    var properties = {
      display: 'flex',
      flexDirection: "row",
      flow: 'right',
      alignSelf: 'right',
    };
    var formClass = "form-inline";
  } else {
    var className = "col-sm-4 col-sm-offset-4";
    var properties = {
      //flexDirection: 'row'
    };
    var formClass = "";
  }
  return (
    <div className={className} style={properties} >
      <form onSubmit={props.onSubmitCity} className={formClass} >
        <TextInput onUpdateCity={props.onUpdateCity}
          cityName={props.cityName} />
        <Submit onClick={props.onSubmitCity} />
      </form>
    </div>
  );
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  cityName: PropTypes.string.isRequired
}

export default GetCity;
