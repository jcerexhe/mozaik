import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

export default class FacilitiesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      autoplay: true,
      arrows: true,
      dots: false,
      nextArrow: RightArrow,
      prevArrow: LeftArrow,
    }
    return (
      <div className='facilities-slider'>
        <Slick { ...settings }>
          { _.map(this.props.images, (img) => {
            return <img src={ img } />
          }) }
        </Slick>
      </div>
    );
  }
}


