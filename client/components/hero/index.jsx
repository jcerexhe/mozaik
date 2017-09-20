import React, { Component } from 'react';
import Slick from 'react-slick';

export default class HeroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  changeSlide(i) {
    this.refs.slider.slickGoTo(i);
  }

  updateCurrentSlide(i) {
    this.setState({ currentSlide: i });
  }

  render() {
    const { currentSlide } = this.state;
    const settings = {
      className: 'home-slider',
      autoplay: true,
      arrows: false,
      afterChange: (i) => this.setState({ currentSlide: i })
    };
    return (
      <div className='home-hero'>
        <Slick ref='slider' { ...settings }>
          <div className='slide'>
            <h1>Mozaik Creative</h1>
            <p>Deciding what to study is tricky. We'll help you find the right course in the creative industry.</p>
          </div>
          <div className='slide' />
          <div className='slide' />
        </Slick>
        <div className='slider-dots'>
          <ul className='slick-dots'>
            <li className={ currentSlide == 0 ? 'slick-active' : ''}>
              <div className='dot' onClick={ () => this.changeSlide(0) }/>
            </li>
            <li className={ currentSlide == 1 ? 'slick-active' : ''}>
              <div className='dot' onClick={ () => this.changeSlide(1) }/>
            </li>
            <li className={ currentSlide == 2 ? 'slick-active' : ''}>
              <div className='dot' onClick={ () => this.changeSlide(2) }/>
            </li>
          </ul>
        </div>
        <div className='scroll-search'>
          <div className='arrow-down' />
        </div>
      </div>
    );
  }
}
