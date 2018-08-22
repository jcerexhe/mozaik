import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

export default class MobileFacilities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      autoplay: false,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slideToScroll: 1,
      nextArrow: RightArrow,
      prevArrow: LeftArrow,
    }
    return (
      <div className='facilities-mobile'>
        <div className='facilities-slider'>
          <Slick { ...settings }>
            { _.map(this.props.images, (img) => {
              return <img src={ img } />
            }) }
          </Slick>
        </div>
      </div>
    );
  }
}


