import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../../shared/filter.jsx';
import SearchLink from '../../search/searchLink.jsx';

export default class SearchDiscover extends Component {
  constructor(props) {
    super(props);
    const digMedia = ["2D/3D Animation", "3D Design", "AR/VR", "Computer Graphics", "Digital Design", "Digital Media", "Games Design", "Motion Graphics", "Visual Effects (VFX)", "Web Design"];
    const visComm = ["Advertising Design", "Design", "Graphic Design", "Illustration", "Packaging & Branding", "Photography", "Typography", "Visual Arts", "Visual Communication", "Web Design"];
    const fineArts = ["2D/3D Art", "Ceramics", "Drawing", "Fine Arts", "Glass Design", "Jewellery Design", "Metalsmithing", "Painting", "Sculpture", "Wood Design"];
    const filmTvAudio = ["Cinematography", "Directing", "Editing", "Film/TV", "Music for Screen", "Producing", "Production Design", "Radio", "Screenwriting", "Sound Design"];
    const perfArts = ["Acting", "Choreography", "Costume Design", "Dance", "Drama", "Live Production", "Music", "Performing Arts", "Playwriting", "Singing"]
    const design = ["Colour Design", "Design", "Digital Design", "Fashion Design", "Games Design", "Graphic Design", "Industrial Design", "Interior Design", "Textile Design", "UX/UI"];
    const photog = ["Art Photography", "Commercial Photography", "Digital Imaging", "Documentary Photography", "Fashion Photography", "Photography", "Photography Design", "Photojournalism", "Photomedia", "Visual Communication"];
    const builtEnv = ["Architecture", "Building Design", "Built Environment", "Digital Architecture", "Interior Decoration", "Interior Design", "Spatial Design", "Staging", "Styling", "Urban Design"];
    const busCreat = ["Arts Management", "Creative Leadership", "Event Management", "Fashion Business", "Finance for Creative Industries", "Live Production", "Marketing for Entmnt Bus", "Music Business", "Screen Business", "Stage Management"];
    this.state = {
      searchCategory: 'discipline', // options: [discipline, categories, search]
      discipline: {
        interestAreas: ['all areas'],
        interestDisciplines: ['all disciplines'],
        interestCountries: ['all areas']
      },
      categories: [],
      school: '',
      studyArea: '',
      city: '',
      areas: {
        'Digital Media': digMedia,
        'Visual Comms': visComm,
        'Fine Arts': fineArts,
        'Film/TV/Audio': filmTvAudio,
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('one1')
    if (nextProps.limit > this.props.limit)
      this.props.getResults({ ...this.state, limit: nextProps.limit });
    if(_.eq(this.props, nextProps))
      this.props.getResults({ ...nextState, limit: 30 });
    if (_.eq(this.state, nextState))
      console.log('osame')
      return true;
    console.log('222')
    return false;
  }

  allAreas(){
        //       interestAreas: ['all areas'],
        // interestDisciplines: ['all areas'],
        // interestCountries: ['all areas']
  const { discipline } = this.state;

      this.setState({
        discipline: {
          ...discipline,
          ['interestAreas']: ['all areas'],
          ['interestDisciplines']: ['all disciplines'],
          ['interestCountries']: ['all areas']
        }
      });

      return;

  }

  renderDisBox(filter, active, start, end){
      return(
          <Filter
            filterItems={ filter.slice(start, end) }
            activeItems={ active }
            onClick={ (val) => this.updateDiscipline('interestDisciplines', val) }
            isHome={ true }
            interest='discipline-mob'
          />
        );

  }
  updateDiscipline(area, val) {
    console.log(val);
    this.setState({ searchCategory: 'discipline'});
    const { discipline } = this.state;
    let interests = this.state.discipline[area];
    if ((val === 'all areas') || (val === 'all disciplines')) {
      this.setState({
        discipline: {
          ...discipline,
          [area]: [val]
        }
      });
      return;
    }

    // if(area == 'interestAreas'){
    //   this.setState({
    //     discipline: {
    //       ...discipline,
    //       ['interestAreas']: [val],
    //       ['interestDisciplines']: ['all areas']
    //     }
    //   });
    //   return;
    // }
    _.remove(interests, (v) => { return v.indexOf('all areas') != -1 });
        _.remove(interests, (v) => { return v.indexOf('all disciplines') != -1 });
    if (interests.includes(val))
      _.remove(interests, (v) => { return v.indexOf(val) != -1 });
    else
      if(area == 'interestCountries'){
        interests.push(val.toUpperCase());
        console.log(val.toUpperCase());
      }else{
        interests.push(val);
      }


      
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
    console.log('val', val)
    let { categories } = this.state;
    if (categories.includes(val))
      _.remove(categories, (c) => { return c.indexOf(val) != -1 });
    else
      categories.push(val);
    this.setState({
      categories: [...categories]
    });
  }

  renderDiscipline() {
    const { discipline, areas } = this.state;
    const countries = ['AUSTRALIA', 'CANADA', 'NEW ZEALAND', 'EUROPE', 'USA'];
    let interestDisciplines = _.flatten(_.map(areas, (v, k) => { return (discipline.interestAreas.includes(k) ? v : []) }));
    if (interestDisciplines.length === 0) {
      interestDisciplines = _.uniq(_.flatten(_.map(areas, (v, k) => { return v.slice(0, 2) }))).slice(0, 10);
    }
    let count = 0;
    let start = 0;
    let end = 7;
    let sss = []

                while(['all disciplines'].concat(interestDisciplines).length >= count){
              sss.push(this.renderDisBox(['all disciplines'].concat(interestDisciplines), discipline.interestDisciplines, start, end));
                 
                    count += 7;
      start += 7;
      end += 7;
            }

    return (
      <div id='search-discipline'>
        <div className='mobile-interest-areas'>
          {/*<button className='btn' onClick={ (val) => this.allAreas()}> All Areas</button> */}

          <div className="mobile-interest-area-box">
            <div className="mobile-area-1-3">
              <Filter
                filterItems={ ['Digital Media'] }
                activeItems={ discipline.interestAreas }
                onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                isHome={ true }
                interest='area-mob'
              />
              <Filter
                filterItems={ ['Film/TV/Audio'] }
                activeItems={ discipline.interestAreas }
                onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                isHome={ true }
                interest='area-mob'
              />
              <Filter
                filterItems={ ['Photography'] }
                activeItems={ discipline.interestAreas }
                onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                isHome={ true }
                interest='area-mob'
              />
            </div>
            <div className="mobile-area-2-3">
              <Filter
                  filterItems={ ['Visual Comms'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
               />
               <Filter
                  filterItems={ ['Performing Arts'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
               />
               <Filter
                  filterItems={ ['Built Environment'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
               />         
            </div>
            <div className="mobile-area-3-3">
              <Filter
                  filterItems={ ['Fine Arts'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
                />
              <Filter
                  filterItems={ ['Design'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
                />
              <Filter
                  filterItems={ ['Business for Creatives'] }
                  activeItems={ discipline.interestAreas }
                  onClick={ (val) => this.updateDiscipline('interestAreas', val) }
                  isHome={ true }
                  interest='area-mob'
                />     
            </div>         
          </div>        
          <hr className="search-line" />
          <div className='mobile-interest-countries'>
          <Filter
            filterItems={ countries }
            activeItems={ discipline.interestCountries }
            onClick={ (val) => this.updateDiscipline('interestCountries', val) }
            isHome={ true }
            interest='country-mob'
          />
        </div>

        
        <br />
        <div className='mobile-interest-disciplines'>
          { 
            _.map(sss, (dis) => {
                return(
                     dis 
                  );i
            })
          }
        
        </div>
        <br />
      </div>
    </div>  
    )
  }

  renderCategories() {
    const { categories, areas } = this.state;
    console.log('categories', categories)
    return (
      <div id='search-categories'>
        <div className='interest-areas'>
          <h3>What areas interest you?</h3>
          <div className='interest-categories'>
            { _.map(areas, (vals, cat) => {
              return (
                <div className='category' key={ cat + '_div' }>
                  <h3
                    className="category-heading"
                    onClick={ () => this.updateCategories(cat) }
                    key={ cat }>
                    { cat }
                  </h3>
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
    // const { search } = this.state;
    // return (
    //   <div id='search-search'>
    //     <div className='interest-areas'>
    //       <h3>What areas interest you?</h3>
    //       <div className='search-input'>
    //         <input value={ search } placeholder='Search by course name or keywords ...' onChange={ (e) => this.setState({ search: e.target.value }) } />
    //       </div>
    //     </div>
    //   </div>
    // );
    this.setState({ searchCategory: 'search', 
      school: this.refs.textSchool.value,
      studyArea: this.refs.textArea.value, 
      city: this.refs.textCity.value,
   });

  }

  render() {
    const { searchCategory, discipline, categories, search } = this.state;
    // let rendered = this.renderDiscipline();
    // switch (searchCategory) {
    //   case "discipline": rendered = this.renderDiscipline();
    //     break;
    //   case 'categories': rendered = this.renderCategories();
    //     break;
    //   case 'search': rendered = this.renderSearch();
    //     break;
    // }
    return (
      <div>
        <h1 className="search-discover-heading">Discover</h1>
        <div id="search" className={searchCategory === 'categories' ? 'taller-search' : ''}>
          <div className='mobile-search-content'>
            <div className='mobile-search-criteria'>
            {
              // <div className='search-category'>
              //   <span onClick={ () => this.setState({ searchCategory: 'discipline' }) }
              //     className={ 'list-btn' + (searchCategory === 'discipline' ? ' active' : '') } />
              //   <span onClick={ () => this.setState({ searchCategory: 'categories' }) }
              //     className={ 'refine-btn' + (searchCategory === 'categories' ? ' active' : '') } />
              //   <span onClick={ () => this.setState({ searchCategory: 'search' }) }
              //     className={ 'search-btn' + (searchCategory === 'search' ? ' active' : '') } />
              // </div>
            }
              <div className="mobile-search-input">
                <input placeholder="Search" ref="textSchool, textArea, textCity" />
                {/*<input placeholder="Study Area" ref="textArea" />
                <input placeholder="City/Country" ref="textCity"/>
                <button onClick={() => this.renderSearch()}>Search</button> */}
                
              </div>
              { //rendered 
               this.renderDiscipline()
              }
              <p className="results-found">{this.props.resultsAmount} results found</p>
              </div>
             
           </div>
        </div>
     </div> 

    );
  }
}
