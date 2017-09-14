import React from 'react';

const Result = (props) => {
  const { result } = props;
  return (
    <a className='search-result' href={ '/'+result.school.slug+'/course/'+result.slug }>
      <span>{ result.name }</span>
      <img src={ result.image } alt={ result.name } />
    </a>
  );
}

export default Result;
