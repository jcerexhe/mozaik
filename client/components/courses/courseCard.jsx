import React from 'react';
import _ from 'lodash';
import likeCourse from '../shared/likeCourse';

const CourseCard = (props) => {
  const { course, school, coursekey } = props;
  // course liking func
  let storageExists = localStorage.getItem('likedCourses')
  let likedCourses;
  if (storageExists !== null) {
    likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
  } else {
    likedCourses = []
  }
  let aligncourse;
  let aligndesign;
  let alignclass;

  if ((coursekey + 1)%2 == 0){
    aligncourse={left: '50px'};
    alignclass='course-info-bit-left';
    const disciplines = ( course.disciplines.length > 0 ? (
    <p className={alignclass}>
      <span className='bold caps'>qualifications:</span>
      <span className='info-bit-content'>{ course.qualifications.join(', ') }</span>
    </p>
  ) : <div />);
    return(
      <div className='course-card' id={ course.slug } style={aligncourse}>
        <div className="likesection">
          <h3><a href={ '/school/'+school.slug+'/courses' }><i onClick={() => likeCourse(course.name)} className={'fa ' + (likedCourses.includes(course.name) ? 'fa-heart ' : 'fa-heart-o ') + 'card-icon'} aria-hidden="true" style={{float: 'left'}}></i></a></h3>
        </div>
        <div className='course-card-right'>
          <div className='course-info'>
            <div className='info-bits-container'>
              <div className='info-bits-section'>
                <p className={alignclass}>
                  <span className='bold caps'>price</span>
                  <span className='info-bit-content'>
                    { _.map(course.prices, (price, i) => {
                      return <span key={ i }>{ price.type }: AUD { price.fees }</span>;
                    }) }
                  </span>
                </p>
                { disciplines }
                <p className={alignclass}>
                  <span className='bold caps'>next intake</span>
                  <span className='info-bit-content'>{ course.intakes }</span>
                </p>
              </div>
            </div>
            <div className='course-buttons' style={{textAlign: 'left'}}>
              <a className='btn' href='#'>enquire</a>
              <a className='btn' href='#'>apply</a>
            </div>
          </div>
        </div>
        <div className='course-card-right'>
          <h3>{ course.name }</h3>
          <div className='course-info'>
            <p>{ course.description }</p>
            <div className='info-bits-container'>
              <div className='info-bits-section'>
                <p className='course-info-bit-left'>
                  <span className='bold caps'>length:</span>
                  <span className='info-bit-content'>{ course.length }</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }else{
    aligncourse={left: '-50px'};
    alignclass='course-info-bit-right';
        const disciplines = ( course.disciplines.length > 0 ? (
    <p className={alignclass}>
      <span className='bold caps'>qualifications:</span>
      <span className='info-bit-content'>{ course.qualifications.join(', ') }</span>
    </p>
  ) : <div />);
    return (
      <div className='course-card' id={ course.slug } style={aligncourse}>
      <div className='course-card-right'>
        <h3>{ course.name }</h3>
        <div className='course-info'>
          <p>{ course.description }</p>
          <div className='info-bits-container'>
            <div className='info-bits-section'>
              <p className='course-info-bit-left'>
                <span className='bold caps'>length:</span>
                <span className='info-bit-content'>{ course.length }</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='course-card-right'>
        <div className='course-info'>
          <div className='info-bits-container'>
            <div className='info-bits-section'>
              <p className={alignclass}>
                <span className='bold caps'>price</span>
                <span className='info-bit-content'>
                  { _.map(course.prices, (price, i) => {
                    return <span key={ i }>{ price.type }: AUD { price.fees }</span>;
                  }) }
                </span>
              </p>
              { disciplines }
              <p className={alignclass}>
                <span className='bold caps'>next intake</span>
                <span className='info-bit-content'>{ course.intakes }</span>
              </p>
            </div>
          </div>
          <div className='course-buttons'>
            <a className='btn' href='#'>enquire</a>
            <a className='btn' href='#'>apply</a>
          </div>
        </div>
      </div>
      <div className="likesection">
        <h3><a href={ '/school/'+school.slug+'/courses' }><i onClick={() => likeCourse(course.name)} className={'fa ' + (likedCourses.includes(course.name) ? 'fa-heart ' : 'fa-heart-o ') + 'card-icon'} aria-hidden="true"></i></a></h3>
      </div>
    </div>
    );
  }
}

export default CourseCard;
