import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import SearchLink from './searchLink.jsx';

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
      categories: [''],
      search: ''
    };
  }

  componentWillMount() {
    this.props.getResults({ ...this.state });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.limit > this.props.limit)
      this.props.getResults({ ...this.state });
    if (_.eq(this.state, nextState))
      return true;
    this.props.getResults({ ...nextState });
    return false;
  }

  updateDiscipline(area, val) {
    const { discipline } = this.state;
    let interests = this.state.discipline[area];
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

  updateCategories(val) {
    let { categories } = this.state;
    if (categories.includes(val))
      _.remove(categories, (c) => { return c.indexOf(val) != -1 });
    else
      categories.push(val);
    this.setState({
      categories: [...categories]
    });
  }

  // TODO own components
  renderDiscipline() {
    const { discipline } = this.state;
    const interestAreas = ['all areas', 'digital media', 'visual comms', 'film/tv/audio', 'design', 'photography', 'performing arts', 'built environment', 'arts', 'fashion', 'business for creatives'];
    // TODO put actual disciplines
    const disciplines = ['all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas', 'all areas'];
    const countries = ['all areas', 'australia', 'canada', 'new zealand', 'singapore', 'usa'];
    return (
      <div id='search-discipline'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <Filter
            filterItems={ interestAreas }
            activeItems={ discipline.interestAreas }
            onClick={ (val) => this.updateDiscipline('interestAreas', val) }
          />
        </div>
        <div className='interest-disciplines'>
          <h3>Do these disciplines interest you?</h3>
          <Filter
            filterItems={ disciplines }
            activeItems={ discipline.interestDisciplines }
            onClick={ (val) => this.updateDiscipline('interestDisciplines', val) }
          />
          <div className='interest-countries'>
            <h4>What country?</h4>
            <Filter
              filterItems={ countries }
              activeItems={ discipline.interestCountries }
              onClick={ (val) => this.updateDiscipline('interestCountries', val) }
            />
          </div>
        </div>
      </div>
    )
  }

  renderCategories() {
    const { categories } = this.state;
    const education = ['High School / Enlisted', 'College Graduate / Officer'];
    const careers = ['Healthcare', 'Law Professional', 'Ministry Professional'];
    const asvab = ['Administrative', 'Electronics', 'General', 'Mechanical'];
    return (
      <div id='search-categories'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <div className='interest-categories'>
            <div className='category'>
              <h4>Education</h4>
              <ul className='search-links'>
                { _.map(education, (val, i) => {
                  return (
                    <li key={ Math.random() }>
                      <SearchLink val={ val } active={ categories.includes(val) } onClick={ (val) => this.updateCategories(val) } />
                    </li>
                  );
                }) }
              </ul>
            </div>
            <div className='category'>
              <h4>Professional careers</h4>
              <ul className='search-links'>
                { _.map(careers, (val, i) => {
                  return (
                    <li key={ Math.random() }>
                      <SearchLink val={ val } active={ categories.includes(val) } onClick={ (val) => this.updateCategories(val) } />
                    </li>
                  );
                }) }
              </ul>
            </div>
            <div className='category'>
              <h4>ASVAB Categories</h4>
              <ul className='search-links'>
                { _.map(asvab, (val, i) => {
                  return (
                    <li key={ Math.random() }>
                      <SearchLink val={ val } active={ categories.includes(val) } onClick={ (val) => this.updateCategories(val) } />
                    </li>
                  );
                }) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSearch() {
    const { search } = this.state;
    return (
      <div id='search-search'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <div className='search-input'>
            <input value={ search } placeholder='Search by course name or keywords ...' onChange={ (e) => this.setState({ search: e.target.value }) } />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { searchCategory, discipline, categories, search } = this.state;
    let rendered = <div />;
    switch (searchCategory) {
      case "discipline": rendered = this.renderDiscipline();
        break;
      case 'categories': rendered = this.renderCategories();
        break;
      case 'search': rendered = this.renderSearch();
        break;
    }
    return (
      <div>
        <div id="search">
          <div className='search-content'>
            <h2>
              <span>q</span>
              <span>u</span>
              <span>i</span>
              <span>c</span>
              <span>k</span>
              <span> </span>
              <span>s</span>
              <span>e</span>
              <span>a</span>
              <span>r</span>
              <span>c</span>
              <span>h</span>
            </h2>
            <div className='search-criteria'>
              <div className='search-category'>
                <span onClick={ () => this.setState({ searchCategory: 'discipline' }) }
                  className={ 'list-btn' + (searchCategory === 'discipline' ? ' active' : '') } />
                <span onClick={ () => this.setState({ searchCategory: 'categories' }) }
                  className={ 'refine-btn' + (searchCategory === 'categories' ? ' active' : '') } />
                <span onClick={ () => this.setState({ searchCategory: 'search' }) }
                  className={ 'search-btn' + (searchCategory === 'search' ? ' active' : '') } />
              </div>
              { rendered }
            </div>
          </div>
        </div>
        <div className='search-blue-background' />
      </div>
    );
  }
}
