import React, { Component } from 'react';
import SearchButton from './searchButton.js';
import _ from 'lodash';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCategory: 'discipline', // options: [discipline, categories, search]
      discipline: {
        interestAreas: ['all areas'],
        interestDisciplines: ['all areas'],
        interestCountries: ['all areas']
      },
      categories: [],
      search: ''
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  updateDiscipline(area, val) {
    const { discipline } = this.state;
    var interests = this.state.discipline[area];
    if (val === 'all areas') {
      this.setState({
        discipline: {
          ...discipline,
          [area]: ['all areas']
        }
      });
      return;
    }
    _.remove(interests, (v) => { return v.indexOf('all areas') != -1 });
    if (interests.includes(val))
      _.remove(interests, (v) => { return v.indexOf(val) != -1 });
    else
      interests.push(val);
    if (interests.length == 0)
      interests.push('all areas');
    this.setState({
      discipline: {
        ...discipline,
        [area]: [...interests]
      }
    });
  }

  render() {
    const { searchCategory, discipline, categories, search } = this.state;
    const interestAreas = ['all areas', 'digital media', 'visual comms', 'film/tv/audio', 'design', 'photography', 'performing arts', 'built environment', 'arts', 'fashion', 'business for creatives'];
    const disciplines = ['all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas'];
    const countries = ['all areas', 'australia', 'canada', 'new zealand', 'singapore', 'usa'];
    return (
      <div>
        <div id="search">
          <div className='search-content'>
            <h2>quick search</h2>
            <p>{ searchCategory }</p>
            <div className='search-criteria'>
              <div className='search-category'>
                <span onClick={ () => this.setState({ searchCategory: 'discipline' }) }
                  className={ searchCategory === 'discipline' ? 'active' : '' }>discipline</span>
                <span onClick={ () => this.setState({ searchCategory: 'categories' }) }
                  className={ searchCategory === 'categories' ? 'active' : '' }>categories</span>
                <span onClick={ () => this.setState({ searchCategory: 'search' }) }
                  className={ searchCategory === 'search' ? 'active' : '' }>search</span>
              </div>
              <div id='search-discipline'>
                <div className='interest-areas'>
                  <h2>What areas interest you?</h2>
                  <ul className='search-buttons'>
                    { _.map(interestAreas, (area) => {
                      return (
                        <li>
                          <SearchButton val={ area } active={ discipline.interestAreas.includes(area) } onClick={ (val) => this.updateDiscipline('interestAreas', val) } />
                        </li>
                      );
                    }) }
                  </ul>
                </div>
                <div className='interest-disciplines'>
                  <h2>Do these disciplines interest you?</h2>
                  <ul className='search-buttons'>
                    { _.map(disciplines, (area) => {
                      // TODO put actual disciplines
                      return (
                        <li>
                          <SearchButton val={ area } active={ discipline.interestDisciplines.includes(area) } onClick={ (val) => this.updateDiscipline('interestDisciplines', val) } />
                        </li>
                      );
                    }) }
                  </ul>
                  <div className='interest-countries'>
                    <h3>What country?</h3>
                    <ul className='search-buttons'>
                      { _.map(countries, (area) => {
                        return (
                          <li>
                            <SearchButton bg="white" val={ area } active={ discipline.interestCountries.includes(area) } onClick={ (val) => this.updateDiscipline('interestCountries', val) } />
                          </li>
                        );
                      }) }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='search-blue-background' />
      </div>
    );
  }
}
