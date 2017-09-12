import React from 'react';

const SearchLink = (props) => {
  const classes = _.reduce(props.classes, (s, c) => {
    return s + ` ${ c } `
  }, 'search-link');
  return (
    <a className={ classes + (props.active ? ' active' : '') } onClick={ () => props.onClick(props.val) }>{ props.val }</a>
  );
}

// TODO proptypes

export default SearchLink;
