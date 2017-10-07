import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';

export default class HeroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slides: [
        {
          heading: 'Mozaik Creative',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350623/slider1-compressor_qgn31w.png'
        },
        {
          heading: 'Mozaik Creative',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350623/slider1-compressor_qgn31w.png'
        },
        {
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1507350977/slider2-compressor_zd4ufr.png'
        }
      ],
      settings: {
        className: 'home-slider',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        afterChange: (i) => this.setState({ currentSlide: i })
      }
    };
  }

  changeSlide(i) {
    this.refs.slider.slickGoTo(i);
  }

  updateCurrentSlide(i) {
    this.setState({ currentSlide: i });
  }

  render() {
    const { currentSlide, slides, settings } = this.state;
    return (
      <div className='home-hero'>
        <Slick ref='slider' { ...settings }>
          { _.map(slides, (slide, i) => {
            return (
              <div key={ i } className='slide' style={{ backgroundImage: `url(${slide.background})` }}>
                <div className='slider-body'>
                  <h1>{ slide.heading }</h1>
                  <p>{ slide.text }</p>
                </div>
              </div>
            );
          }) }
        </Slick>
        <div className='slider-dots'>
          <ul className='slick-dots'>
            { _.map(slides, (slide, i) => {
              return (
                <li key={ i } className={ currentSlide == i ? 'slick-active' : '' }>
                  <div className='dot' onClick={ () => this.changeSlide(i) } />
                </li>
              );
            }) }
          </ul>
        </div>
        <div className='scroll-search'>
          <a className='scroll-search-link' href='#search'>
            <img src='/images/white-arrow-down.png' alt='arrow-down' />
          </a>
        </div>
      </div>
    );
  }
}
