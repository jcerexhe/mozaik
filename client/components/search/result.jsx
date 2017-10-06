import React from 'react';

const Result = (props) => {
  const { result } = props;
  console.log(result.school);
  return (
    <a className='search-result' href={ '/school/'+result.school.slug+'/'+result.slug+'/artwork' }>
      <span>{ result.name }</span>
      <img src={ result.image } alt={ result.name } />
      <img className='logo' src={ result.school.logo } alt='school logo' />
    </a>
  );
}

export default Result;
