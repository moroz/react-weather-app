import React from 'react';
import { Link } from 'react-router-dom';

function BackButton (props) {
  return (
    <button className="btn btn-primary" onClick={props.handleClick} >
      Go Back
    </button>
  );
}

export default BackButton;
