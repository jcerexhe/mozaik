import React from 'react';
import likeCourse from '../shared/likeCourse';

const Result = (props) => {
  const { result } = props;
  let storageExists = localStorage.getItem('likedCourses')
  let likedCourses;
  if (storageExists !== null) {
    likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
  } else {
    likedCourses = []
  }
  return (
    <a className='search-result' href={ '/school/'+result.school.slug+'/'+result.slug+'/artwork' }>
      <span className='course-name'>{ result.name }</span>
      <span className='city'>Sydney, Australia</span>
      <img src={ result.image } alt={ result.name } />
      <img className='logo' src={ result.school.logo } alt='school logo' />
      <i onClick={() => likeCourse(result.name)} className={'fa ' + (likedCourses.includes(result.name) ? 'fa-heart ' : 'fa-heart-o ') + 'fa-2x'} aria-hidden="true"></i>
    </a>
  );
}

export default Result;
