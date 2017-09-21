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
          background: 'http://via.placeholder.com/350x150'
        },
        {
          background: 'http://via.placeholder.com/350x150'
        },
        {
          background: 'http://via.placeholder.com/350x150'
        }
      ],
      settings: {
        className: 'home-slider',
        autoplay: true,
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
          { _.map(slides, (slide) => {
            return (
              <div className='slide' style={{ backgroundImage: `url(${slide.background})` }}>
                <h1>{ slide.heading }</h1>
                <p>{ slide.text }</p>
              </div>
            );
          }) }
        </Slick>
        <div className='slider-dots'>
          <ul className='slick-dots'>
            { _.map(slides, (slide, i) => {
              return (
                <li className={ currentSlide == i ? 'slick-active' : '' }>
                  <div className='dot' onClick={ () => this.changeSlide(i) } />
                </li>
              );
            }) }
          </ul>
        </div>
        <div className='scroll-search'>
          <div className='arrow-down' />
        </div>
      </div>
    );
  }
}
