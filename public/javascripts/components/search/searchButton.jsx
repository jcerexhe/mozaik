import React from 'react';

const SearchButton = (props) => {
  const classes = _.reduce(props.classes, (str, cla) => {
    return str + ` ${ cla } `
  }, 'search-button');
  return (
    <button type='button' className={ classes + (props.active ? ' active' : '') } onClick={ () => props.onClick(props.val) }>{ props.val }</button>
  );
}

// TODO proptypes

export default SearchButton;
