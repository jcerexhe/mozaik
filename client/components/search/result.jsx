import React from 'react';

function likeCourse(name) {
  let storageExists = localStorage.getItem('likedCourses')
  if (storageExists !== null) {
    let storage = localStorage.getItem('likedCourses')
    storage = JSON.parse(storage)
    if (storage.includes(name)) {
      let i = storage.indexOf(name);
      if (i != -1) {
        storage.splice(i, 1);
      }
    } else {
      storage = storage.concat(name)
    }
    localStorage.setItem('likedCourses', JSON.stringify(storage))
  } else {
    var newArray = ['test'];
    newArray = newArray.concat(name)
    localStorage.setItem('likedCourses', JSON.stringify(newArray))
  }
}

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
