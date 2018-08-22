import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

export default class MobileAlumni extends Component {
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
      slidesToShow: (alumni.length >= 3 ? 3 : alumni.length),
      slideToScroll: 1,
      nextArrow: RightArrow,
      prevArrow: LeftArrow,
    }
    return (
      <div className='alumni-mobile'>
        <div className='alumni-slider'>
         <h1>ALUMNI</h1>
          <Slick { ...settings }>
            { _.map(alumni, (alum) => {
              return (
                <div className='alumni-slide'>
                  <div className='alumni-slide-content'>
                    <img className='img-circle img-resp' src={ alum.photo } alt={ alum.name } />
                    <h3>{ alum.name }</h3>
                    <p><span>Course:</span> { alum.course }</p>
                    <p><span>Profession:</span> { alum.profession }</p>
                    <p><span>Credits:</span> { alum.credits }</p>
                  </div>
                </div>
              );
            }) }
          </Slick>
        </div>
      </div>
    );
  }
}
