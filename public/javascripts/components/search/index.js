import React, { Component } from 'react';
import Search from './search.jsx';
// import Results from './results';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
      error: {
        exists: false,
        message: ''
      }
    };
  }

  componentWillMount() {
    axios.get('/api/courses').then((result) => {
      if (result.data.error) {
        error();
        return;
      }
      this.setState({ results: result.data });
    }).catch((err) => {
      error();
    });
  }

  error() {
    this.setState({
      error: {
        exists: true,
        message: 'Could not fetch results. Please try again.'
      }
    })
  }

  updateResults(res, err) {
    this.setState({ results: res, error: err });
  }

  render() {
    const { results, loading, error } = this.state;
    return (
      <div>
        <Search updateResults={ (res, err) => this.setState({
          results: res,
          error: err
        }) } />
      </div>
    );
  }
}
// <Results results={ results } loading={ loading } error={ error } />
