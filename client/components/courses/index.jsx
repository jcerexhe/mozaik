import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import CourseCard from './courseCard.jsx';

export default class CoursesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplines: ['all areas'],
      digitalMedia: ['2D/3D Animation', '3D Design', 'AR/VR', 'Computer Graphics', 'Digital Design', 'Digital Media', 'Games Design', 'Motion Graphics', 'Visual Effects (VFX)', 'Web Design'],

      activeCourses: props.courses
    };
  }

  updateDiscipline(val) {
    let { disciplines } = this.state;
    if (val === 'all areas') {
      this.setState({ disciplines: ['all areas'] });
      return;
    }
    _.remove(disciplines, (v) => { return v.indexOf('all areas') != -1 });
    if (disciplines.includes(val))
      _.remove(disciplines, (v) => { return v.indexOf(val) != -1 });
    else
      disciplines.push(val);
    if (disciplines.length == 0)
      disciplines.push('all areas');
    this.setState({ disciplines: [...disciplines] });

    // refine results
    const { courses } = this.props;
    if (disciplines.includes('all areas')) {
      this.setState({ activeCourses: [...courses] });
      return;
    }
    const activeCourses = _.filter(courses, (course) => {
      return _.intersection(disciplines, course.disciplines).length > 0;
    })
    this.setState({ activeCourses });
  }

  render() {
    const { courses, school } = this.props;
    const { disciplines, activeCourses } = this.state;
    let disciplineList = ['all areas'];
    disciplineList.push(this.props.schoolDisciplines);
    // Combine the 'all areas' array with the disciplineList array and flatten it to remove nesting
    disciplineList = _.flatten(disciplineList);
    return (
      <div>
        <div className="study-areas-box">
          <h1>study areas</h1>
          <div className="study-areas">
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area1.jpg")'}}>
              <h3 className="padding">digital media</h3>
              <div className="disciplines">
                <p>
                {
                  // <ul>
                  //   <li><a href="#">digital design</a></li>
                  //   <li><a href="#">digital design</a></li>
                  //   <li><a href="#">digital design</a></li>
                  //   <li><a href="#">digital design</a></li>
                  //   <li><a href="#">digital design</a></li>
                  // </ul> 
                }
                  <Filter
                    filterItems={ this.state.digitalMedia }
                    activeItems={ disciplines }
                    onClick={ (val) => this.updateDiscipline(val) }
                    isHome={true}
                  />
                </p>
              </div>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area2.jpg")'}}>
              <h3 >visual communication</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area3.jpeg")'}}>
              <h3 className="padding">fine arts</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area4.jpeg")'}}>
              <h3 className="padding">film/tv/audio</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area5.jpeg")'}}>
              <h3 className="padding">performing arts</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area6.jpeg")'}}>
              <h3 className="padding">design</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area7.jpeg")'}}>
              <h3 className="padding">photography</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area8.jpeg")'}}>
              <h3 className="padding">built environment</h3>
            </div>
            <div className="area-box" style={{backgroundImage: 'url("/images/areas/area9.jpg")'}}>
              <h3>business for creatives</h3>
            </div>
          </div>
        </div>
        <div className='course-bg'>
          { /* <div className='filter-container'>
            <div className='filter'>
              <h2>disciplines</h2>
              <Filter
                filterItems={ disciplineList }
                activeItems={ disciplines }
                onClick={ (val) => this.updateDiscipline(val) }
              />
            </div>
           <div className='refine-button'>
              <a href='/discover' className='btn btn-full-width'>refine</a>
            </div>
          </div>  */}

              <div className='course-card-container'>
            { _.map(activeCourses, (course, i) => {
              return (
                <CourseCard course={ course } school={ school } key={ i } coursekey={ i } />
              )
            }) }
          </div>
        </div>
      </div>
    );
  }
}
