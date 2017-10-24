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
      limit: 30,
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
      limit: 30,
    });
  }

  updateLimit() {
    const { limit } = this.state;
    this.setState({
      limit: limit + 30,
    });
  }

  getResults(params) {
    this.setState({ limit: params.limit, loading: true });
    axios.get('/api/courses', { params }).then((result) => {
      if (result.data.error) {
        this.error();
        return;
      }
      this.setState({ results: result.data });
      setTimeout(() => this.setState({ loading: false }), 600);
    }).catch((err) => {
      this.error();
    });
  }

  updateResults(res, err) {
    this.setState({ results: res, error: err });
  }

  render() {
    const { results, loading, error, limit } = this.state;
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    const randomise_results = shuffle(results);
    // TODO modify url with query params and default search with said params on load
    return (
      <div id='search-section'>
        <Search getResults={ (params) => this.getResults(params) } limit={ limit } resetLimit={ () => this.resetLimit() }/>
        <Results getMoreResults={ () => this.updateLimit() } limit={ limit } results={ randomise_results } loading={ loading } error={ error } />
      </div>
    );
  }
}
