import React, { Component } from 'react';

export default class ButtonsGrid extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let { gCols, rowItems, display } = this.props;

    let gIndex=0,
				gReturns = []; 

    if (display) {
      gCols = gCols.slice(0, display);
    }

		for (let rowCtr = 0; rowCtr < gCols.length; rowCtr+=rowItems) {
			let gRows =[];
			for (gIndex; gRows.length < rowItems; gIndex++) {

				if (gCols[gIndex]) {
					gRows.push(<div key={"col-" + gIndex} className="col">{gCols[gIndex]}</div>);
				} else {
					gRows.push(<div key={"col-" + gIndex} className="col"></div>)
				}
			}
			gReturns.push(
				<div key={"row-" + rowCtr} className="row">{gRows}</div>
			)
		}
    return(
      <div className="container-fluid">
        {gReturns}
      </div>

    )
  }
}