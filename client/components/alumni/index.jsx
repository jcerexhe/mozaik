import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

export default class AlumniApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { alumni } = this.props;
    const settings = {
      autoplay: false,
      arrows: true,
      dots: false,
      slidesToShow: (alumni.length >= 4 ? 4 : alumni.length),
      slideToScroll: 1,
      nextArrow: RightArrow,
      prevArrow: LeftArrow,
    }
    return (
      <div className='alumni-slider'>
        <Slick { ...settings }>
          { _.map(alumni, (alum) => {
            return (
              <div className='alumni-slide'>
                <div className='alumni-slide-content'>
                  <img className='img-circle img-resp' src={ alum.photo } alt={ alum.name } />
                  <h3>{ alum.name }</h3>
                  <p>{ alum.blurb }</p>
                </div>
              </div>
            );
          }) }
        </Slick>
      </div>
    );
  }
}
