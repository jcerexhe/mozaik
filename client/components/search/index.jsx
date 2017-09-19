import React, { Component } from 'react';
import Search from './search.jsx';
import Results from './results.jsx';
import axios from 'axios';

export default class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true,
      error: {
        exists: false,
        message: ''
      },
      limit: 6,
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

  resetLimit() {
    this.setState({
      limit: 6,
    });
  }

  updateLimit() {
    const { limit } = this.state;
    this.setState({
      limit: limit + 6,
    });
  }

  getResults(params) {
    this.setState({ loading: true });
    const { limit } = this.state;
    params = { ...params, limit };
    axios.get('/api/courses', { params }).then((result) => {
      if (result.data.error) {
        this.error();
        return;
      }
      this.setState({ results: result.data, loading: false });
    }).catch((err) => {
      this.error();
    });
  }

  updateResults(res, err) {
    this.setState({ results: res, error: err });
  }

  render() {
    const { results, loading, error, limit } = this.state;
    return (
      <div>
        <Search getResults={ (params) => this.getResults(params) } limit={ limit }/>
        <Results getMoreResults={ () => this.updateLimit() } limit={ limit } results={ results } loading={ loading } error={ error } />
      </div>
    );
  }
}
