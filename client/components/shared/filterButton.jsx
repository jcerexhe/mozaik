import React from 'react';

const FilterButton = (props) => {
  const classes = _.reduce(props.classes, (str, cla) => {
    return str + ` ${ cla } `
  }, 'filter-btn');


  return (
    <button type='button' className={ props.interest + ' ' + classes + (props.active ? ' active' : '') } onClick={ () => props.onClick(props.val) }>{ props.val}</button>
  );
}

// TODO proptypes

export default FilterButton;
