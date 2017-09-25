import React from 'react';

const Result = (props) => {
  const { result } = props;
  return (
    <a className='search-result' href={ '/school/'+result.school.slug+'/courses#'+result.slug }>
      <span>{ result.name }</span>
      <img src={ result.image } alt={ result.name } />
    </a>
  );
}

export default Result;
