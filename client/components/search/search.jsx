import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import SearchLink from './searchLink.jsx';

export default class Search extends Component {
  constructor(props) {
    super(props);
    const digMedia = ["Animation", "3D Design", "AR/VR", "Computer Graphics", "Digital Design", "Digital Media", "Games Design", "Motion Graphics", "Visual Effects (VFX)", "Web Design"];
    const visComm = ["Advertising Design", "Design", "Graphic Design", "Illustration", "Packaging & Branding", "Photography", "Typography", "Visual Arts", "Visual Communication", "Web Design"];
    const fineArts = ["2D/3D Art", "Ceramics", "Drawing", "Fine Arts", "Glass Design", "Jewellery Design", "Metalsmithing", "Painting", "Sculpture", "Wood Design"];
    const filmTvAudio = ["Cinematography", "Directing", "Editing", "Film/TV", "Music for Screen", "Producing", "Production Design", "Radio", "Screenwriting", "Sound Design"];
    const perfArts = ["Acting", "Choreography", "Costume Design", "Dance", "Drama", "Live Production", "Music", "Performing Arts", "Playwriting", "Singing"]
    const design = ["Colour Design", "Design", "Digital Design", "Fashion Design", "Games Design", "Graphic Design", "Industrial Design", "Interior Design", "Textile Design", "UX/UI"];
    const photog = ["Art Photography", "Commercial Photography", "Digital Imaging", "Documentary Photography", "Fashion Photography", "Photography", "Photography Design", "Photojournalism", "Photomedia", "Visual Communication"];
    const builtEnv = ["Architecture", "Building Design", "Built Environment", "Digital Architecture", "Interior Decoration", "Interior Design", "Spatial Design", "Staging", "Styling", "Urban Design"];
    const busCreat = ["Arts Management", "Creative Leadership", "Event Management", "Fashion Business", "Finance for Creative Industries", "Live Production", "Marketing for Entertainment Business", "Music Business", "Screen Business", "Stage Management"];
    this.state = {
      searchCategory: 'discipline', // options: [discipline, categories, search]
      discipline: {
        interestAreas: ['all areas'],
        interestDisciplines: ['all areas'],
        interestCountries: ['all areas']
      },
      categories: [],
      search: '',
      areas: {
        'Digital Media': digMedia,
        'Visual Communication': visComm,
        'Fine Arts': fineArts,
        'Film / TV / Audio': filmTvAudio,
        'Performing Arts': perfArts,
        'Design': design,
        'Photography': photog,
        'Built Environment': builtEnv,
        'Business for Creatives': busCreat
      }
    };
  }

  componentWillMount() {
    this.props.getResults({ ...this.state, limit: this.props.limit });
    // this.props.getResults(this.props.limit, this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.limit > this.props.limit)
      this.props.getResults({ ...this.state, limit: nextProps.limit });
      // this.props.getResults(nextProps.limit, { ...this.state });
    if(_.eq(this.props, nextProps))
      this.props.getResults({ ...nextState, limit: 30 });
      // this.props.getResults(6, { ...nextState });
    if (_.eq(this.state, nextState))
      return true;
    return false;
  }

  updateDiscipline(area, val) {
    const { discipline } = this.state;
    let interests = this.state.discipline[area];
    // This code makes only one area able to be active at a time
    // if (area === 'interestAreas') {
    //   this.setState({
    //     discipline: {
    //       ...discipline,
    //       [area]: [val],
    //       interestDisciplines: ['all areas']
    //     }
    //   })
    //   return;
    // }
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
    const { discipline, areas } = this.state;
    const countries = ['all areas', 'australia', 'canada', 'new zealand', 'singapore', 'usa'];
    let interestDisciplines = _.flatten(_.map(areas, (v, k) => { return (discipline.interestAreas.includes(k) ? v : []) }));
    if (interestDisciplines.length === 0) {
      interestDisciplines = _.uniq(_.flatten(_.map(areas, (v, k) => { return v.slice(0, 2) })));
    }
    return (
      <div id='search-discipline'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <Filter
            filterItems={ ['all areas'].concat(_.map(areas, (v, k) => { return k })) }
            activeItems={ discipline.interestAreas }
            onClick={ (val) => this.updateDiscipline('interestAreas', val) }
            isHome={ true }
          />
        </div>
        <div className='interest-disciplines'>
          <h3>Do these disciplines interest you?</h3>
          <Filter
            filterItems={ ['all areas'].concat(interestDisciplines) }
            activeItems={ discipline.interestDisciplines }
            onClick={ (val) => this.updateDiscipline('interestDisciplines', val) }
            isHome={ true }
          />
        </div>
        <div className='interest-countries'>
          <h4>Choose a country?</h4>
          <Filter
            filterItems={ countries }
            activeItems={ discipline.interestCountries }
            onClick={ (val) => this.updateDiscipline('interestCountries', val) }
            isHome={ true }
          />
        </div>
      </div>
    )
  }

  renderCategories() {
    const { categories, areas } = this.state;
    return (
      <div id='search-categories'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <div className='interest-categories'>
            { _.map(areas, (vals, cat) => {
              return (
                <div className='category' key={ cat }>
                  <h4>{ cat }</h4>
                  <ul className='search-links'>
                    { _.map(vals, (val) => {
                      return (
                        <li key={ val+Math.random() }>
                          <SearchLink val={ val } active={ categories.includes(val) } onClick={ (val) => this.updateCategories(val) } />
                        </li>
                      );
                    }) }
                  </ul>
                </div>
              );
            }) }
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
        <div id="search" className={searchCategory === 'categories' ? 'taller-search' : ''}>
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
              <p className="results-found">{this.props.resultsAmount} results found</p>
            </div>
          </div>
        </div>
        <div className={'search-blue-background' + (searchCategory === 'categories' ? ' taller-search' : '')} />
      </div>
    );
  }
}
