import React, { Component } from 'react';
import _ from 'lodash';
import FilterButton from './filterButton.jsx';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { filterItems, activeItems, onClick } = this.props;
    const classes = _.reduce(this.props.classes, (str, cla) => {
      return str + ` ${ cla } `
    }, 'filter-buttons');
    return (
      <ul className={ classes }>
        { _.map(filterItems, (item, i) => {
          const active = activeItems.includes(item);
          return (
            <li key={ item }>
              <FilterButton val={ item } active={ active } onClick={ (val) => onClick(val) } />
            </li>
          );
        }) }
      </ul>
    );
  }
};
