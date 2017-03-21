import React from 'react';

function Header (props) {
  return (
    <h1 className="text-center" >{props.text}</h1>
  );
}

Header.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default Header;
