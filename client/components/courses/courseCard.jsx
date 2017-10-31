import React from 'react';
import _ from 'lodash';
import likeCourse from '../shared/likeCourse';

const CourseCard = (props) => {
  const { course, school } = props;
  const disciplines = ( course.disciplines.length > 0 ? (
    <p className='course-info-bit'>
      <span className='bold caps'>specialisations:</span>
      <span className='info-bit-content'>{ course.specialisations.join(', ') }</span>
    </p>
  ) : <div />);
  // course liking func
  let storageExists = localStorage.getItem('likedCourses')
  let likedCourses;
  if (storageExists !== null) {
    likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
  } else {
    likedCourses = []
  }
  return (
    <div className='course-card' id={ course.slug }>
      <div className='course-card-left'>
        <img className='img-resp' src={ course.image } alt={ course.name } />
        <div className='course-buttons'>
          <a className='btn' href='#'>enquire</a>
          <a className='btn' href='#'>apply</a>
        </div>
      </div>
      <div className='course-card-right'>
        <h3>{ course.name } <a href={ '/school/'+school.slug+'/courses' }><i onClick={() => likeCourse(course.name)} className={'fa ' + (likedCourses.includes(course.name) ? 'fa-heart ' : 'fa-heart-o ') + 'fa-2x card-icon'} aria-hidden="true"></i></a></h3>
        <div className='course-info'>
          <p>{ course.description }</p>
          <div className='info-bits-container'>
            <div className='info-bits-section'>
              <p className='course-info-bit'>
                <span className='bold caps'>length:</span>
                <span className='info-bit-content'>{ course.length }</span>
              </p>
              <p className='course-info-bit'>
                <span className='bold caps'>price:</span>
                <span className='info-bit-content'>
                  { _.map(course.prices, (price, i) => {
                    return <span key={ i }>{ price.type }: AUD { price.fees }</span>;
                  }) }
                </span>
              </p>
              { disciplines }
            </div>
            <div className='info-bits-section'>
              <p className='course-info-bit'>
                <span className='bold caps'>campus:</span>
                <span className='info-bit-content'>
                  <span>
                  { _.map(course.campus, (campus, i) => {
                    if(course.campus.length == (i+1)) {
                      return `${ campus }`;  
                    } else {
                      return `${ campus } | `;
                    }
                  }) }
                  </span>
                </span>
              </p>
              <p className='course-info-bit'>
                <span className='bold caps'>intakes:</span>
                <span className='info-bit-content'>{ course.intakes }</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
