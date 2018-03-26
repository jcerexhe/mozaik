import React, { Component } from 'react';
import _ from 'lodash';
import FilterButton from './filterButton.jsx';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activeItems, onClick } = this.props;
    let { filterItems } = this.props;
    var smallerFilterList = filterItems.slice(0,4);
    const classes = _.reduce(this.props.classes, (str, cla) => {
      return str + ` ${ cla } `
    }, 'filter-buttons');

    return (
      <ul className={ classes }>
        { _.map((this.props.isHome ? filterItems : smallerFilterList), (item, i) => {
          const active = activeItems.includes(item);
            let hide;
            if(item== 'all areas'){
              hide = {display: 'none'};
            }
          return (
            <li key={ item }>
              <FilterButton  hideitem={hide} val={ item } active={ active } onClick={ (val) => onClick(val) } />
            </li>
          );
        }) }
      </ul>
    );
  }
};
