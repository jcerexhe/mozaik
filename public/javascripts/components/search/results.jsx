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

  render() {
    const { results, loading, errors, getMoreResults, limit } = this.props;
    return loading ? <p>loading</p> : (
      <div id='results'>
        <ul className='search-results'>
          { _.map(results, (result) => {
            return (
              <li>
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
