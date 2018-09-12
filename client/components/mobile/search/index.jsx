import React, { Component } from 'react';
import _ from 'lodash';

// Created Components (.jsx)
import SearchBar from './searchBar.jsx';
import QueryButtons from './queryButtons.jsx';
import SchoolResults from './schoolResults.jsx'
import AdvSearch from './advSearch.jsx';

// Place Objects containing study areas, disciplines, and those that aren't in the seeds here (this acts as the db for them)
const studyAreasDb = [
  {
    name: 'Digital Media',
    disciplines: ["2D/3D Animation", "3D Design", "AR/VR", "Computer Graphics", "Digital Design", "Digital Media", "Games Design", "Motion Graphics", "Visual Effects (VFX)", "Web Design"]
  },
  {
    name: 'Visual Comms',
    disciplines: ["Advertising Design", "Design", "Graphic Design", "Illustration", "Packaging & Branding", "Photography", "Typography", "Visual Arts", "Visual Communication", "Web Design"]
  },
  {
    name: 'Fine Arts',
    disciplines: ["2D/3D Art", "Ceramics", "Drawing", "Fine Arts", "Glass Design", "Jewellery Design", "Metalsmithing", "Painting", "Sculpture", "Wood Design"]
  },
  {
    name: 'Film/TV/Audio',
    disciplines: ["Cinematography", "Directing", "Editing", "Film/TV", "Music for Screen", "Producing", "Production Design", "Radio", "Screenwriting", "Sound Design"]
  },
  {
    name: 'Performing Arts',
    disciplines: ["Acting", "Choreography", "Costume Design", "Dance", "Drama", "Live Production", "Music", "Performing Arts", "Playwriting", "Singing"]
  },
  {
    name: 'Design',
    disciplines: ["Colour Design", "Design", "Digital Design", "Fashion Design", "Games Design", "Graphic Design", "Industrial Design", "Interior Design", "Textile Design", "UX/UI"]
  },
  {
    name: 'Photography',
    disciplines: ["Art Photography", "Commercial Photography", "Digital Imaging", "Documentary Photography", "Fashion Photography", "Photography", "Photography Design", "Photojournalism", "Photomedia", "Visual Communication"]
  },
  {
    name: 'Built Environment',
    disciplines: ["Architecture", "Building Design", "Built Environment", "Digital Architecture", "Interior Decoration", "Interior Design", "Spatial Design", "Staging", "Styling", "Urban Design"]
  },
  {
    name: 'Business for Creatives',
    disciplines: ["Arts Management", "Creative Leadership", "Event Management", "Fashion Business", "Finance for Creative Industries", "Live Production", "Marketing for Entmnt Bus", "Music Business", "Screen Business", "Stage Management"]
  },
]


let allDisciplines = [] 
studyAreasDb.map(studyArea =>{
  allDisciplines = allDisciplines.concat(studyArea.disciplines) 
})

allDisciplines = _.uniq(allDisciplines.sort()) 


const initialStates = {
  studyAreas: studyAreasDb,
  countries: ['AUSTRALIA', 'CANADA', 'NEW ZEALAND', 'EUROPE', 'USA'],
  filteredDisciplines: allDisciplines,
  queriedStudyAreas: [],
  queriedCountries: [],
  queriedDisciplines: [],
  queriedSearch: '',
  queriedPriceRange: [0, 200000],
  reinitialize: true
}
export default class MobileDiscover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyAreas: studyAreasDb,
      countries: ['AUSTRALIA', 'CANADA', 'NEW ZEALAND', 'EUROPE', 'USA'],
      filteredDisciplines: allDisciplines,
      queriedStudyAreas: [],
      queriedCountries: [],
      queriedDisciplines: [],
      queriedSearch: '',
      queriedPriceRange: [0, 200000],
      reinitialize: false
    }
    // Bind these functions this way so that it can accept params when a prop
    this.updateParentState = this.updateParentState.bind(this);
    
  }

  /* Remove 'selected' class from all query buttons*/
  removeQryBtnsSelectedClass() {
    let selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach(element => {
      element.className = element.className.replace(/\sselected/g, ""); // For IE9 and earlier
    });
  }
  
  updateParentState(update, callback){
    this.setState(update, callback);
  } 

  // Return this.state to initial values
  reinitializeState() {
    this.setState({
      ...initialStates
    }, () => {
      this.removeQryBtnsSelectedClass();
    });
  }

  render() {
    let { studyAreas, countries, queriedPriceRange, queriedStudyAreas, filteredDisciplines, queriedCountries, queriedDisciplines, queriedSearch, reinitialize } = this.state;

    return (
      <div className="mobile-discover-container">

        <div className="header">
          <svg viewBox="0 0 47 13" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polyline points="8,13 0,13 0,0 8,0" x="0" y="0"/><polyline points="39,0 47,0 47,13 39,13"/></svg>
          <h1>DISCOVER</h1>
        </div>

        <SearchBar
          updateParentState = {this.updateParentState}
          queriedSearch = {queriedSearch}
          initialStates = {initialStates}
          removeQryBtnsSelectedClass = {() => this.removeQryBtnsSelectedClass()}
        />

        <div className="study-areas-grid">
          <QueryButtons
            reinitialize  =  {reinitialize}
            updateParentState = {this.updateParentState}
            grp = {studyAreas}
            clss = "default-button"
            lblObjKy = "name"
            rwItms = {3}
            dsply = {null}
            idPrfx = "study-area-btn-"
            clckFxn = "handleSABtnClick"
            qGrp = {queriedStudyAreas}
            filteredDisciplines = {filteredDisciplines}
            queriedDisciplines = {queriedDisciplines}
            allDisciplines = {allDisciplines}
          />
        </div>

        <div className="countries-grid">
          <QueryButtons
            reinitialize  =  {reinitialize}
            updateParentState = {this.updateParentState}
            grp = {countries}
            clss = "default-button pink-btn country-button"
            lblObjKy = {null}
            rwItms = {5}
            dsply = {null}
            displayCb = {null}
            idPrfx = "country-btn-"
            clckFxn = "handleCtryBtnClick"
            qGrp = {queriedCountries}
          />
        </div>

        <div className="disciplines-section">

            <QueryButtons
              reinitialize  =  {reinitialize}
              updateParentState = {this.updateParentState}
              grp = {filteredDisciplines}
              clss = "default-button"
              lblObjKy = {null}
              rwItms = {2}
              dsply = {10}
              displayCb = "reselectQueriedDiscs"
              filteredDisciplines = {filteredDisciplines}
              queriedDisciplines = {queriedDisciplines}
              idPrfx = "discipline-btn-"
              clckFxn = "handleDiscBtnClick"
              qGrp = {queriedDisciplines}
            />
        </div>

        <div className="clear-filter-btn-container">
          <button className="default-button pink-btn clear-filter-btn" onClick={() => this.reinitializeState()}>CLEAR FILTER</button>
        </div>


        <div className="schools-section">
          <SchoolResults
            queriedStudyAreas = {queriedStudyAreas}
            queriedCountries = {queriedCountries}
            queriedDisciplines = {queriedDisciplines}
            queriedSearch = {queriedSearch}
            updateParentState = {this.updateParentState}
            reinitialize  =  {reinitialize}
          />
        </div>

        <AdvSearch
          queriedPriceRange = {queriedPriceRange}
          updateParentState = {this.updateParentState}
        />
      </div>
    );
  }
}