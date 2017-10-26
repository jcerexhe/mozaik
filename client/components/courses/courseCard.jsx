import React from 'react';
import _ from 'lodash';

const CourseCard = (props) => {
  const { course } = props;
  const disciplines = ( course.disciplines.length > 0 ? (
    <p className='course-info-bit'>
      <span className='bold caps'>specialisations:</span>
      <span className='info-bit-content'>{ course.specialisations.join(', ') }</span>
    </p>
  ) : <div />);
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
        <h3>{ course.name }</h3>
        <div className='course-info'>
          <p>{ course.description }</p>
          <div className='info-bits-container'>
            <p className='course-info-bit'>
              <span className='bold caps'>price:</span>
              <span className='info-bit-content'>
                { _.map(course.prices, (price, i) => {
                  return <span key={ i }>{ price.type }: AUD { price.fees }</span>;
                }) }
              </span>
            </p>
            <p className='course-info-bit'>
              <span className='bold caps'>length:</span>
              <span className='info-bit-content'>{ course.length }</span>
            </p>
            <p className='course-info-bit'>
              <span className='bold caps'>campus:</span>
              <span className='info-bit-content'>
                { _.map(course.campus, (campus, i) => {
                  return <span key={ i }>{ campus }</span>;
                }) }
              </span>
            </p>
            <p className='course-info-bit'>
              <span className='bold caps'>intakes:</span>
              <span className='info-bit-content'>{ course.intakes }</span>
            </p>
            { disciplines }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
