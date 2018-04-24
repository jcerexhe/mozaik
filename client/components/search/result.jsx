import React from 'react';
import likeCourse from '../shared/likeCourse';

const Result = (props) => {
  const { result } = props;
  // let storageExists = localStorage.getItem('likedCourses')
  // let likedCourses;
  // if (storageExists !== null) {
  //   likedCourses = JSON.parse(localStorage.getItem('likedCourses'));
  // } else {
  //   likedCourses = []
  // }
  // let location = result.school.locations.map(location => {
  //   return <div>{location.campus}, {location.country}</div>
  // })
  //  let location = result.locations.map(location => {
  //   return <div>{location.campus}, {location.country}</div>
  // })
  return (
    // <a className='search-result' href={ '/school/'+result.school.slug+'/'+result.slug+'/artwork' }>
      // <span className='course-name'>{ result.name }</span>
      // <span className='city'>{ location[0] }</span>
      // <img src={ result.image } alt={ result.name } />
      // <img className='logo' src={ result.school.logo } alt='school logo' />
      // <i onClick={() => likeCourse(result.name)} className={'fa ' + (likedCourses.includes(result.name) ? 'fa-heart ' : 'fa-heart-o ') + 'fa-2x'} aria-hidden="true"></i>
    // </a>
    // http://res.cloudinary.com/mozaik/image/upload/BFA-Acting-course-842x324-3_xjaolt.jpg
    <a className='search-result' href={ '/school/'+result.slug+'/details' } style={{backgroundImage: 'url(http://res.cloudinary.com/mozaik/image/upload/'+result.facilitiesImages[0]+'.jpg)'}}>
       <p className='course-name'>{ result.name }</p>
       <p className='city'>{ result.locations[0].campus }</p> 
      
      {//<img src={ 'http://res.cloudinary.com/mozaik/image/upload/'+result.facilitiesImages[0]+'.jpg' } alt={ result.name } />
    }</a>

  );
}

export default Result