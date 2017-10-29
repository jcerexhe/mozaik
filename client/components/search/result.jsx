import React from 'react';

const Result = (props) => {
  const { result } = props;
  return (
    <a className='search-result' href={ '/school/'+result.school.slug+'/'+result.slug+'/artwork' }>
      <span className='course-name'>{ result.name }</span>
      <span className='city'>Sydney, Australia</span>
      <img src={ result.image } alt={ result.name } />
      <img className='logo' src={ result.school.logo } alt='school logo' />
      <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
    </a>
  );
}

export default Result;
