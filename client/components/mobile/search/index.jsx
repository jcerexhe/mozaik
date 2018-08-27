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

export default class MobileDiscover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyAreas: studyAreasDb,
      disciplinesDisplay: 10,
      countries: ['AUSTRALIA', 'CANADA', 'NEW ZEALAND', 'EUROPE', 'USA'],
      priceRange: [0, 200000],
      queriedStudyAreas: [],
      filteredDisciplines: allDisciplines,
      queriedCountries: [],
      queriedDisciplines: [],
      searchQuery: '',
      resultsDisplay: 6,
    }
    // Bind these functions this way so that it can accept params when a prop
    this.updateParentState = this.updateParentState.bind(this);
    this.handleSABtnClick = this.handleSABtnClick.bind(this);
    this.handleCtryBtnClick = this.handleCtryBtnClick.bind(this);
    this.handleDiscBtnClick = this.handleDiscBtnClick.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  }

  // Return this.state to initial values
  reinitializeState() {
    let selectedElements = document.querySelectorAll('.selected');
    selectedElements.forEach(element => {
      element.className = element.className.replace(/\bselected\b/g, ""); 
    });

    this.setState({
      studyAreas: studyAreasDb,
      disciplinesDisplay: 10,
      countries: ['AUSTRALIA', 'CANADA', 'NEW ZEALAND', 'EUROPE', 'USA'],
      priceRange: [0, 200000],
      queriedStudyAreas: [],
      filteredDisciplines: allDisciplines,
      queriedCountries: [],
      queriedDisciplines: [],
      searchQuery: '',
      resultsDisplay: 6,
    });
  }

  
  toggleSelectedClass(element) {
    let eClasses = element.className.split(" "),
        selectedIndex = eClasses.indexOf("selected");
    if (selectedIndex == -1) {
        eClasses.push("selected");
    } else {
        eClasses.splice(selectedIndex, 1);
    }
    element.className = eClasses.join(" ");
  }

  
  reselectQueriedDiscs(){
    let {filteredDisciplines, queriedDisciplines} = this.state;
    queriedDisciplines.forEach(queriedDiscipline => {
      let btnIndex = filteredDisciplines.indexOf(queriedDiscipline),
          discBtn = document.getElementById('discipline-btn-'+btnIndex);
      if (discBtn) {
        let discBtnClasses = discBtn.className.split(" "),
            selectedIndex = discBtnClasses.indexOf("selected");
        if (selectedIndex == -1) {
          discBtn.className += " selected";
        }
      }
    });
  }

  removePrevSelectedDiscs(prevSelectsIndeces) {
    let {filteredDisciplines, queriedDisciplines} = this.state;
    prevSelectsIndeces.forEach(prevSelectIndex => {
      if (filteredDisciplines[prevSelectIndex]) {
        let discBtn = document.getElementById('discipline-btn-'+prevSelectIndex);
        discBtn.className = discBtn.className.replace(/\bselected\b/g, "")
      };
    });
  };

  handleSABtnClick(element, queriedStudyAreas) {
    let { filteredDisciplines, queriedDisciplines } = this.state, 
        fDiscIndeces = []; 

    
    queriedDisciplines.forEach((query, index) => {
      let fDiscIndex = filteredDisciplines.indexOf(query); 
      fDiscIndeces = fDiscIndeces.concat(fDiscIndex); 
    });

    
    let { studyAreas } = this.state; 
    filteredDisciplines = []; 

    /* Loop through 'queriedStudyAreas' to get the disciplines from each study area queried */
    queriedStudyAreas.forEach(queriedSA => {
      let saIndex;
      studyAreas.forEach((studyArea, index) => {
        if (queriedSA == studyArea.name) {
          saIndex = index; /* Get index of queriedSA (which is equivalent to a studyArea.name) in studyArea */
        }
      });
      filteredDisciplines = filteredDisciplines.concat(studyAreas[saIndex].disciplines); /* studyAreas came from studyAreasDB which is an object that organizes each study area with their corresponding disciplines. This allows us to add the correct disciplines to 'filteredDisciplines' */
    });

    filteredDisciplines = _.uniq(filteredDisciplines.sort()); /* .uniq() removes any duplicates in the array and .sort() arranges them alphabetically */

    if (filteredDisciplines.length == 0) { /* In this case, no study areas were selected */
      filteredDisciplines = allDisciplines
    }

    this.setState({
      queriedStudyAreas: queriedStudyAreas,
      filteredDisciplines: filteredDisciplines,
      searchQuery: ''
    }, () => {
      this.toggleSelectedClass(element);
      this.removePrevSelectedDiscs(fDiscIndeces); /* Clear previously selected discipline buttons (the position of the selected positions are the same, but the values selected are different) */
      this.reselectQueriedDiscs();
    });
  }

  handleCtryBtnClick(element, queriedCountries) {
    this.setState({queriedCountries: queriedCountries, searchQuery: ''}, () => {this.toggleSelectedClass(element)})
  }

  handleDiscBtnClick(element, queriedDisciplines) {
    this.setState({queriedDisciplines: queriedDisciplines, searchQuery: ''}, () => {this.toggleSelectedClass(element)})
  }

  setDisplay(group, display, increment) {
    if (group.length < (display + increment)) {
      return group.length
    } else {
      return (display + increment)
    }
  }

  updateParentState(update){
    this.setState(update);
  }

  render() {
    let { studyAreas, disciplinesDisplay, countries, priceRange, resultsDisplay, queriedStudyAreas, filteredDisciplines, queriedCountries, queriedDisciplines, searchQuery } = this.state;

    return (
      <div className="mobile-discover-container">

        <div className="header">
          <svg viewBox="0 0 47 13" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polyline points="8,13 0,13 0,0 8,0" x="0" y="0"/><polyline points="39,0 47,0 47,13 39,13"/></svg>
          <h1>DISCOVER</h1>
        </div>

        <SearchBar
          updateParentState = {this.updateParentState}
          searchQuery = {searchQuery}
        />

        <div className="study-areas-grid">
          <QueryButtons
            grp = {studyAreas}
            clss = "default-button"
            lblObjKy = "name"
            rwItms = {3}
            dsply = {null}
            idPrfx = "study-area-btn-"
            clckFxn = {this.handleSABtnClick}
            queriedGrp = {queriedStudyAreas}
          />
        </div>

        <div className="countries-grid">
          <QueryButtons
            grp = {countries}
            clss = "default-button pink-btn country-button"
            lblObjKy = {null}
            rwItms = {5}
            dsply = {null}
            idPrfx = "country-btn-"
            clckFxn = {this.handleCtryBtnClick}
            queriedGrp = {queriedCountries}
          />
        </div>

        <div className="disciplines-section">
          <div className="grid">
            <QueryButtons
              grp = {filteredDisciplines}
              clss = "default-button"
              lblObjKy = {null}
              rwItms = {2}
              dsply = {disciplinesDisplay}
              idPrfx = "discipline-btn-"
              clckFxn = {this.handleDiscBtnClick}
              queriedGrp = {queriedDisciplines}
            />

            <button className="default-button pink-btn plus" onClick={() => {this.setState({disciplinesDisplay: this.setDisplay(filteredDisciplines, disciplinesDisplay, 10)}, () => {this.reselectQueriedDiscs()})}}>
              <hr/>
              <hr className="vertical"/>
            </button>

          </div>

          <button className="default-button pink-btn clear-filter" onClick={() => this.reinitializeState()}>CLEAR FILTER</button>
        </div>

        <div className="schools-section">
          <SchoolResults
            queriedStudyAreas = {queriedStudyAreas}
            queriedCountries = {queriedCountries}
            queriedDisciplines = {queriedDisciplines}
            searchQuery = {searchQuery}
            resultsDisplay = {resultsDisplay}
            updateParentState = {this.updateParentState}
            setDisplay = {this.setDisplay}
          />
        </div>

        <AdvSearch
          priceRange = {priceRange}
          updateParentState = {this.updateParentState}
        />
      </div>
    );
  }
}