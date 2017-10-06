import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import SearchLink from './searchLink.jsx';

export default class Search extends Component {
  constructor(props) {
    super(props);
    const digMedia = ["Animation", "3D Design", "AR/VR", "Computer Graphics", "Data Visualisation", "Digital Design", "Digital Media", "Games Design", "Motion Graphics", "Multimedia", "Transmedia", "Visual Effects (VFX)", "Web Design"];
    const visComm = ["Advertising Design", "Communication Design", "Design", "Digital Design", "Graphic Design", "Illustration", "Packaging & Branding", "Photography", "Photomedia", "Typography", "Visual Arts", "Visual Communication", "Web Design", "3D Printing"];
    const fineArts = ["Fine Arts", "2D Art", "3D Art", "Arts", "Ceramics", "Drawing", "Illustration", "Jewellery Design", "Painting", "Sculpture", "Glass Design", "Wood Design", "Studio Art", "Indigenous Art", "Metalsmithing", "Gemmology"];
    const filmTvAudio = ["Animation", "Audio", "Film", "TV", "Screen Production", "Cinematography", "Directing", "Editing", "Filmmaking", "Music", "Post Production", "Producing", "Production Design", "Screen Media", "Screen Performance", "Screenwriting", "Sound Design", "Special Effects (SFX)", "Visual Effects (VFX)", "Radio", "Documentary"];
    const perfArts = ["Acting", "Classical Performance", "Contemporary Performance ", "Dance", "Drama", "Music Performance", "Jazz ", "Music Composition", "Performing Arts", "Production", "Playwriting", "Staging", "Theatre", "Costume Design", "Live Production"]
    const design = ["Colour Design", "Costume Design", "Design", "Digital Design", "Fashion Design", "Design", "Games Design", "Graphic Design", "Industrial Design", "Interior Design", "Merchandising", "Product Design", "Sound Design", "Special Effects", "Textile Design", "Visual Communications", "Web Design"];
    const photog = ["Photography", "Photography Design", "Art Photography", "Commercial Photography", "Fashion Photography", "Documentary Photography", "Digital Imaging", "Photojournalism", "Photomedia", "Visual Communication"];
    const builtEnv = ["Architecture", "Built Environment", "Landscape Architecture", "Urban Design", "Interior Design", "Interior Decoration", "Interior Architecture", "Spatial Design", "Styling", "Building Design", "Digital Architecture"];
    const busCreat = ["Creative Leadership", "Finance for Creative Industries", "Marketing for Entertainment Business", "Screen Business", "Fashion Business", "Branded Managment", "Stage Management", "Music Business", "Live Production", "Arts Management", "Visual Merchandising", "Design Thinking", "Event Management"];
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
      this.props.getResults({ ...nextState, limit: 6 });
      // this.props.getResults(6, { ...nextState });
    if (_.eq(this.state, nextState))
      return true;
    return false;
  }

  updateDiscipline(area, val) {
    const { discipline } = this.state;
    let interests = this.state.discipline[area];
    if (area === 'interestAreas') {
      this.setState({
        discipline: {
          ...discipline,
          [area]: [val],
          interestDisciplines: ['all areas']
        }
      })
      return;
    }
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
          />
        </div>
        <div className='interest-disciplines'>
          <h3>Do these disciplines interest you?</h3>
          <Filter
            filterItems={ ['all areas'].concat(interestDisciplines) }
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
            </div>
          </div>
        </div>
        <div className={'search-blue-background' + (searchCategory === 'categories' ? ' taller-search' : '')} />
      </div>
    );
  }
}
