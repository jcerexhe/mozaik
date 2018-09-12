import React, { Component } from 'react';
import DisplayedButtons from './displayedButtons.jsx';

export default class QueryButtons extends Component {
  constructor(props) {
    super(props);

    this.handleSABtnClick = this.handleSABtnClick.bind(this);
    this.handleCtryBtnClick = this.handleCtryBtnClick.bind(this);
    this.handleDiscBtnClick = this.handleDiscBtnClick.bind(this);
    this.handleQueryBtnClick = this.handleQueryBtnClick.bind(this);
  }

  toggleSelectedClass(element) {
    if (element.className.match(/\sselected/g)) {
      element.className = element.className.replace(/\sselected/g, "");
    } else {
      element.className += " selected"; // For IE9 and earlier
    }
  }

  removePrevSelectedDiscs(prevSelectsIndeces) {
    let {filteredDisciplines, queriedDisciplines} = this.props;
    /* Remove selected 'look' from previously selected disciplines */
    prevSelectsIndeces.forEach(prevSelectIndex => {
      if (filteredDisciplines[prevSelectIndex]) {
        let discBtn = document.getElementById('discipline-btn-'+prevSelectIndex);
        discBtn.className = discBtn.className.replace(/\bselected\b/g, "")
      };
    });
  };

  reselectQueriedDiscs(){
    let { filteredDisciplines, queriedDisciplines } = this.props;
    if (queriedDisciplines) {
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
  }

  handleSABtnClick(element, queriedStudyAreas) {
    let { filteredDisciplines, queriedDisciplines, allDisciplines } = this.props,   
       fDiscIndeces = []; 

    /* Loop through each queried discipline to get indeces and queries*/
    queriedDisciplines.forEach((query, index) => {
      let fDiscIndex = filteredDisciplines.indexOf(query); 
      fDiscIndeces = fDiscIndeces.concat(fDiscIndex); 
    });

    let studyAreas = this.props.grp;
    filteredDisciplines = [];

    /* Loop through 'queriedStudyAreas' to get the disciplines from each study area queried */
    queriedStudyAreas.forEach(queriedSA => {
      let saIndex;
      studyAreas.forEach((studyArea, index) => {
        if (queriedSA == studyArea.name) {
          saIndex = index; 
        }
      });
      filteredDisciplines = filteredDisciplines.concat(studyAreas[saIndex].disciplines); 
    });

    filteredDisciplines = _.uniq(filteredDisciplines.sort()); 

    if (filteredDisciplines.length == 0) { /* In this case, no study areas were selected */
      filteredDisciplines = allDisciplines
    }

    this.props.updateParentState({
      queriedStudyAreas: queriedStudyAreas,
      filteredDisciplines: filteredDisciplines,
      queriedSearch: ''
    }, () => {
      this.toggleSelectedClass(element);
      this.removePrevSelectedDiscs(fDiscIndeces); /* Clear previously selected discipline buttons (the position of the selected positions are the same, but the values selected are different) */
      this.reselectQueriedDiscs();
    });
  }

  handleCtryBtnClick(element, queriedCountries) {
    this.props.updateParentState({queriedCountries: queriedCountries, queriedSearch: ''}, () => {this.toggleSelectedClass(element)})
  }

  handleDiscBtnClick(element, queriedDisciplines) {
    this.props.updateParentState({queriedDisciplines: queriedDisciplines, queriedSearch: ''}, () => {this.toggleSelectedClass(element)})
  }


  /* 'handleQueryBtnClick' rechecks the queries in 'qGrp' after a button in the 'qGrp' is clicked, then passes the clicked 'element' and rechecked 'qGrp' back to the parent component as params of 'clckFxn' for further processing. */
  handleQueryBtnClick(event) {
    event.preventDefault();

    let {clckFxn, qGrp} = this.props, /* 'clckFxn' is the function called after getting queries from 'qGrp'*/
        element = event.target,/* Returns the element clicked */
        query = element.innerHTML, /* HTML content of element, which serves as the query */
        qIndex = qGrp.indexOf(query); /* Get index of the clicked button in 'qGrp' */

    /* Toggle 'query' addition to or removal from 'qGrp' */
    if (qIndex > -1) { /* If it exists in 'qGrp' */
      qGrp.splice(qIndex, 1); /* Remove it from 'qGrp' */
    } else {  /* If 'query' is not in 'qGrp', its value will be -1 */
      qGrp = qGrp.concat(query); /* Add it to 'qGrp' */
    };

    if (clckFxn) {
      this[clckFxn](element, qGrp)
    } else {
      console.log('clicked')
    }
  }

  render() {
    let {grp, clss, lblObjKy, rwItms, idPrfx, dsply,displayCb, qGrp, reinitialize, updateParentState} = this.props;
    let gCols = []; // Array containing the 'button' for each grp element
    grp.forEach((item, index) => {
      gCols.push(
        <button className={clss} id={idPrfx+index} key={idPrfx+index} onClick={this.handleQueryBtnClick}>{lblObjKy ? item[lblObjKy] : item}</button>
      )
    });

    return(
      <DisplayedButtons
        updateParentState = {updateParentState}
        reinitialize = {reinitialize}
        gCols = {gCols}
        rowItems = {rwItms}
        display = {dsply}
        displayCb = {displayCb && this[displayCb]}
      />
    )
  }
}