import React, { Component } from 'react';

export default class FilterButtons extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let { group, labelObjKey, rowItems, buttonClass, display } = this.props;

    let gIndex=0,
				gCols = [],
				gReturns = [];
				
		group.forEach(item => {
			if (labelObjKey) {
				gCols.push(
					<div key={item[labelObjKey] + "-col"} className="col">
						<button className={buttonClass}>{item[labelObjKey]}</button>
					</div>
				)
			} else {
				gCols.push(
					<div key={item + "-col"} className="col">
						<button className={buttonClass}>{item}</button>
					</div>
				)
			};
		});

    if (display) {
      gCols = gCols.slice(0, display)
    }

		for (let rowCtr = 0; rowCtr < gCols.length; rowCtr+=rowItems) {
			let gRows =[];
			for (gIndex; gRows.length < rowItems; gIndex++) {

				if (gCols[gIndex]) {
					gRows.push(gCols[gIndex]);
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
