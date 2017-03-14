import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';

class HelloComponent extends React.Component {
  render = () => {
    return (
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById('app'));
