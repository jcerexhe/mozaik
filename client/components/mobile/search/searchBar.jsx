import React, { Component } from 'react';
import _ from 'lodash';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: this.props.queriedSearch
    }
      
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }

  handleQueryChange(event) {
    this.setState({inputVal: event.target.value})
  }

  handleQuerySubmit(event) {
    event.preventDefault();
    this.props.updateParentState({queriedSearch: this.state.inputVal})
  }

  componentDidUpdate(prevProps) {
    if (this.props.queriedSearch !== prevProps.queriedSearch)
    this.setState({inputVal: this.props.queriedSearch})
  }

  render() {
    return(
      <form onSubmit={this.handleQuerySubmit}>
        <input type="text" placeholder="SEARCH..." value={this.state.inputVal} onChange={this.handleQueryChange}/>
      </form>
    )
  }
}