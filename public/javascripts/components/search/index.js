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

  error() {
    this.setState({
      error: {
        exists: true,
        message: 'Could not fetch results. Please try again.'
      }
    })
  }

  getResults(params) {
    axios.get('/api/courses', { params }).then((result) => {
      if (result.data.error) {
        this.error();
        return;
      }
      this.setState({ results: result.data });
    }).catch((err) => {
      this.error();
    });
  }

  updateResults(res, err) {
    this.setState({ results: res, error: err });
  }

  render() {
    const { results, loading, error } = this.state;
    return (
      <div>
        <Search getResults={ (params) => this.getResults(params) } />
      </div>
    );
  }
}
// <Results results={ results } loading={ loading } error={ error } />
