import React, { Component } from 'react';
import ButtonsGrid from './buttonsGrid.jsx';

export default class QueryButtons extends Component {
  constructor(props) {
		super(props);

    this.handleQueryBtnClick = this.handleQueryBtnClick.bind(this);
  }

  handleQueryBtnClick(event) {
    event.preventDefault();

    let {clckFxn, queriedGrp} = this.props, 
        element = event.target,
        query = element.innerHTML,
        qIndex = queriedGrp.indexOf(query);

    
    if (qIndex > -1) { 
      queriedGrp.splice(qIndex, 1); 
    } else {  
      queriedGrp = queriedGrp.concat(query); 
    };

    if (clckFxn) {
      clckFxn(element, queriedGrp)
    } else {
      console.log('clicked')
    }
  }

  render() {
    let {grp, clss, lblObjKy, rwItms, dsply, idPrfx} = this.props
    let gCols = []; 
    grp.forEach((item, index) => {
      gCols.push(
        <button className={clss} id={idPrfx+index} key={idPrfx+index} onClick={this.handleQueryBtnClick}>{lblObjKy ? item[lblObjKy] : item}</button>
      )
		});

    return(
      <ButtonsGrid
        gCols = {gCols}
        rowItems = {rwItms}
        display = {dsply}
      />
    )
  }


}