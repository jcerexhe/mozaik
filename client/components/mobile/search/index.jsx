import React, { Component } from 'react';
import SearchDiscover from './search.jsx';
import Results from '../../search/results.jsx';
import axios from 'axios';

export default class MobileSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resultsAmount: 0,
      loading: true,
      error: {
        exists: false,
        message: ''
      },
      limit: 8
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
      limit: 8,
    });
  }

  updateLimit() {
    const { limit } = this.state;
    this.setState({
      limit: limit + 8,
    });
  }

  getResults(params) {
    this.setState({ limit: params.limit, loading: true });
    axios.get('/api/courses', { params }).then((response) => {
      if (response.data.error) {
        this.error();
        return;
      }
      this.setState({ results: response.data.results, resultsAmount: response.data.resultsAmount });
      setTimeout(() => this.setState({ loading: false }), 600);
    }).catch((err) => {
      this.error();
    });
  }

  updateResults(res, err) {
    this.setState({ results: res, error: err });
  }

  render() {
    const { results, resultsAmount, loading, error, limit } = this.state;
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
        <SearchDiscover getResults={ (params) => this.getResults(params) } limit={ limit } resetLimit={ () => this.resetLimit() } resultsAmount={ resultsAmount } />
        <Results getMoreResults={ () => this.updateLimit() } limit={ limit } results={ randomise_results } loading={ loading } error={ error } />
      </div>
    );
  }
}
