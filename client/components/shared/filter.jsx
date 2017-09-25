import React from 'react';
import _ from 'lodash';
import FilterButton from './filterButton.jsx';

const Filter = (props) => {
  const { filterItems, activeItems, onClick } = props;
  const classes = _.reduce(props.classes, (str, cla) => {
    return str + ` ${ cla } `
  }, 'filter-buttons');
  return (
    <ul className={ classes }>
      { _.map(filterItems, (item, i) => {
        const active = activeItems.includes(item);
        return (
          <li key={ i }>
            <FilterButton val={ item } active={ active } onClick={ (val) => onClick(val) } />
          </li>
        );
      }) }
    </ul>
  );
}

export default Filter;
