import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>what</div>;
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('search-container')
)
