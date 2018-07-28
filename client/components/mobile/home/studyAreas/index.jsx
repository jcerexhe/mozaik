import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';

const studyAreaImages = [
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287645/study-areas/pexels-photo-433617.jpg',
  'https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287309/study-areas/aleks-dorohovich-26-unsplash.jpg',
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287447/study-areas/pexels-photo-262034.jpg',
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287352/study-areas/chris-murray-563843-unsplash.jpg',
  'https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522806278/study-areas/pexels-photo-415307.jpg',
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287247/study-areas/abstract-art-artistic-226589.jpg',
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287581/study-areas/pexels-photo-298298.jpg',
  'http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287362/study-areas/steve-driscoll-106346-unsplash.jpg',
  'https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287677/study-areas/pexels-photo-669615.jpg'
]

export default class MobileHomeStudyAreas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      currentActiveSlide: 0,
      currentImage: '',
      slickSettings: {
        className: 'slider',
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        dots: true,
        beforeChange: (current, next) => this.setState({ activeSlide: next })
      }
    };
  };

  render() {
    const { studyAreas } = this.props;
    let { activeSlide, slickSettings } = this.state;
    return(
      <div className='study-areas-container'>
        <h1>VIEW THE DIFFERENT <span>STUDY AREAS</span>.</h1>
        <div className='content-container image'>
          <Slick {...slickSettings}>
            {_.map( studyAreas, (studyArea, i) => {
                let studyAreaImage = studyAreaImages[i]
                return (
                  <div
                    key={ 'study-area-slide-' + i }
                    className='slide'
                    style={{backgroundImage: `url(${studyAreaImage})`}}>
                  </div>
                );
            })}
          </Slick>
        </div>
        <div className='content-container caption'>
          { studyAreas[activeSlide].title.toLowerCase() == 'film tv audio' ? <h2>FILM / TV / AUDIO</h2> : <h2>{studyAreas[activeSlide].title}</h2>}
          <p>{ studyAreas[activeSlide].description }</p>
          <div className='icon'></div>
          <div className="button-container">
            <button className='button'>FIND OUT MORE</button>
          </div>
        </div>
      </div>
    );
  };
}