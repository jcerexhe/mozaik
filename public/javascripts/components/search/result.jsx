import React from 'react';

const Result = (props) => {
  return (
    <a className='search-result' href="#">
      <span>{ props.result.name }</span>
      <img src={ props.result.image } alt={ props.result.name } />
    </a>
  );
}

export default Result;
