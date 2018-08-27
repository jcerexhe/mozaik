import React, { Component } from 'react';
import _ from 'lodash';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: this.props.searchQuery
    }

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }

  handleQueryChange(event) {
    this.setState({inputVal: event.target.value})
  }

  handleQuerySubmit(event) {
    event.preventDefault();
    this.props.updateParentState({searchQuery: this.state.inputVal})
  }

  render() {
    return(
      <form onSubmit={this.handleQuerySubmit}>
        <input type="text" placeholder="SEARCH..." value={this.state.inputVal} onChange={this.handleQueryChange}/>
      </form>
    )
  }
}