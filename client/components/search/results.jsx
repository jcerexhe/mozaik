import React, { Component } from 'react';
import Result from './result.jsx';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state= {
      ...props
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      ...props
    });
  }

  renderResults() {
    const { results, getMoreResults, limit } = this.props;
    if (results.length == 0) {
      // return no results
      return (
        <div className='no-results'>
          <p>No results found. Please try something else</p>
        </div>
      );
    } else {

      return (
      <div id='results'>
        <ul className='search-results'>
          { _.map(results, (result) => {
            return (
              // <li key={ result.name+result.school.slug}>
              <li key={result.slug}>
                <Result result={ result } />
              </li>
            );
          }) }
        </ul>
        { limit > results.length ? <div /> : (
          <div className='load-more-results'>
            <span onClick={ () => getMoreResults() }>+ load more results</span>
          </div>
        ) }
      </div>
    );
    }
  }

  renderLoading() {
    return (
      <div className='sk-cube-grid'>
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    )
  }

  render() {
    // TODO do something with errors
    const { loading, errors } = this.props;
    const toRender = (loading ? this.renderLoading() : this.renderResults());
    return (
      <div className='results-container'>
        { toRender }
      </div>
    );
  }
}
