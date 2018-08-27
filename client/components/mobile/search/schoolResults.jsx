import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import ButtonsGrid from './buttonsGrid.jsx';

export default class SchoolResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolsIndex: [],
      results: null
    }
  }


  renderResults(results) {
    let {resultsDisplay, updateParentState, setDisplay} = this.props,
        gIndex=0,
        gCols = [],
        gReturns = [];

    if (results.length > 0) {
      results.forEach(result => {
        gCols.push(
          <div className="col" key ={result.short_name+'-col'}>
            <a href={'/school/'+result.slug+'/details'}>
              <div className="school-thumb" style={{backgroundImage: "url(http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/"+result.facilitiesImages[0]+".jpg)"}}>
                <button className="default-button school-btn"><p>{ result.short_name }</p></button>
              </div>
            </a>
          </div>
        )
      });

      return (
        <div className="grid">
          <ButtonsGrid
            gCols = {gCols}
            rowItems = {3}
            display = {resultsDisplay}
          />
          <button className="default-button pink-btn plus" onClick={() => updateParentState({ resultsDisplay: setDisplay(results, resultsDisplay, 6) })}>
            <hr/>
            <hr className="vertical"/>
          </button>
        </div>
      );
    } else {
      return <p className="no-result-text">No results found. Please try something else.</p>
    };
  }

  compareBtnQueries(queries, schlsIndxObjKey) {
    let {schoolsIndex} = this.state,
        resultArr = [],
        queryRegexAnimation = /(2D Animation)|(3D Animation)/g,
        queryRegexArt = /(2D Art)|(3D Art)/g;

    if (queries.length > 0) {
      queries.forEach(query => {
        schoolsIndex.forEach((schlIndx, index) => {
          let arr = schlIndx[schlsIndxObjKey];
          arr.forEach(e => {
            if (query == "2D/3D Art") {
              if (e == query || e.match(queryRegexArt)) { 
                resultArr = resultArr.concat(index)
              }
            } else if (query == "2D/3D Animation") {
              if (e == query || e.match(queryRegexAnimation)) { 
                resultArr = resultArr.concat(index)
              }
            } else if ( e == query ) {
              resultArr = resultArr.concat(index)
            }
          });
        });
      });
    } else { 
      schoolsIndex.forEach((schoolIndex, index) =>{
        resultArr = resultArr.concat(index) 
      })
    }
    return _.uniq(resultArr) 
  }

  
  compareSrchQueries(searchQuery) {
    let {schoolsIndex} = this.state,
        resultIndeces = [],
        results = [],
        query = searchQuery.trim().replace("\\s{2,}", " ").split(" "); 

    query = query.filter(queryWord => queryWord.length > 0).join(" "); 

    schoolsIndex.forEach((schoolIndex, index) => {
      let combiData = []; 
      combiData.push(schoolIndex.name, schoolIndex.short_name); 
      combiData = combiData.concat(schoolIndex.study_areas, schoolIndex.disciplines, schoolIndex.countries);
      combiData.forEach(combiDatum => {
        let searchQueryReg = "(?:"+ query +")+"
        if (combiDatum.match(RegExp(searchQueryReg, 'gi'))) { 
          resultIndeces = resultIndeces.concat(index)
        };
      })
    });
    resultIndeces = _.uniq(resultIndeces); // Remove duplicates from array
    return resultIndeces;
  }


  getResults() {
    let {queriedStudyAreas, queriedCountries, queriedDisciplines, searchQuery} = this.props,
        {schoolsIndex} = this.state, 
        saResults = [],
        cResults = [], 
        dResults = [], 
        allResults = [];

    
    if (searchQuery) { 
      let resultIndeces = this.compareSrchQueries(searchQuery); 
      resultIndeces.forEach(resultIndex => {
        allResults = allResults.concat(schoolsIndex[resultIndex])
      })
      console.log('allResults from search')

    } else if (queriedStudyAreas.length == 0 && queriedCountries.length == 0 && queriedDisciplines.length == 0) { /* No queries */
      allResults = schoolsIndex
      console.log('allResults from no query')
    } else { 
      saResults = this.compareBtnQueries(queriedStudyAreas, "study_areas");
      cResults = this.compareBtnQueries(queriedCountries, "countries");
      dResults = this.compareBtnQueries(queriedDisciplines, "disciplines");

      
      saResults.forEach(saResult => {
        if (cResults.indexOf(saResult) > -1) { 
          if (dResults.indexOf(saResult) > -1) { 
            allResults = allResults.concat(schoolsIndex[saResult]) 
          }
        }
      });

      console.log('allResults from btns')
    };

    
    this.setState({results: allResults});
  }

  
  getSchoolsIndex() {
    axios.get('/api/mobile/schools/search/index').then((response) => {
      setTimeout(() => this.setState({schoolsIndex: response.data.schoolsIndex}, () => {
        this.getResults();
      }), 500);
    }).catch((err) => {
      console.log(err);
      return <p className="no-result-text">Error getting results. Please try something else.</p>
    })
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

  
  componentDidMount() {
    this.getSchoolsIndex()
  }

  
  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      this.setState({results: null}, () => {this.getSchoolsIndex()});
    }
  }

  render() {
    let {results, schoolsIndex} = this.state;
    console.log(results); 

    return(
      results?this.renderResults(results):this.renderLoading() 
    )
  }
}