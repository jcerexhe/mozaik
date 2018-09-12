// Dependencies
import React, { Component } from 'react';

// Created Components (.jsx)
import ButtonsGrid from './buttonsGrid.jsx';

export default class DisplayedButtons extends Component {
  constructor(props) {
		super(props);

    this.state = {
      display: this.props.display,
      displayIncrement: this.props.display
    }

  }

  setDisplay(grpLength, display, increment) {
    if (grpLength < (display + increment)) {
      return grpLength
    } else {
      return (display + increment)
    }
  }

  componentDidUpdate(){

    if (this.props.reinitialize == true) {
      this.setState({display: this.props.display}, this.props.updateParentState({reinitialize: false}));
    } else if (this.state.display > this.props.gCols.length) {
        this.setState({display: this.props.gCols.length})
    }

  }

  render() {
    let {display, displayIncrement} = this.state,
        {gCols, rowItems, displayCb} = this.props;

    return(
      <div className="grid">
        <ButtonsGrid
          gCols = {gCols}
          rowItems = {rowItems}
          display = {display}
        />

        { display &&
          <button className="default-button pink-btn plus" onClick={() => {this.setState({display: this.setDisplay((gCols.length), display, displayIncrement)}, displayCb && displayCb)}}>
            <hr/>
            <hr className="vertical"/>
          </button>
        }
      </div>
    )
  }
}