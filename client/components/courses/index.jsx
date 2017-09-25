import React, { Component } from 'react';
import _ from 'lodash';
import Filter from '../shared/filter.jsx';
import CourseCard from './courseCard.jsx';

export default class CoursesApp extends Component {
  constructor(props) {
    super(props);
    // TODO pass course id to props instead of all courses, fetch course data
    this.state = {
      disciplines: ['all areas'],
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
  }

  refineCourses() {
    const { courses } = this.props;
    const { disciplines } = this.state;
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
    const { courses } = this.props;
    const { disciplines, activeCourses } = this.state;
    const disciplineList = _.union(['all areas'], ...(_.map(courses, (course) => {
      return course.disciplines;
    })));
    return (
      <div>
        <div className='course-filter-container'>
          <div className='course-filter'>
            <h2>disciplines</h2>
            <Filter
              filterItems={ disciplineList }
              activeItems={ disciplines }
              onClick={ (val) => this.updateDiscipline(val) }
            />
          </div>
          <div className='refine-button'>
            <a className='btn' onClick={ () => this.refineCourses() }>refine</a>
          </div>
        </div>
        <div className='course-card-container'>
          { _.map(activeCourses, (course, i) => {
            return (
              <CourseCard course={ course } key={ i } />
            )
          }) }
        </div>
      </div>
    );
  }
}
