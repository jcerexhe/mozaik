import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import ReactModal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: 'none',
    zIndex: 1000,
  },
  content : {
    backgroundColor: '#181818',
    border: 'none',
    overflow: 'hidden',
    display: 'block'
  }
};

export default class HeroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      slides: [
        {
          heading: 'mozaik play',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1521858246/cory-gazaille-425907-unsplash_btnvtk.png',
          video: true,
          styles: {
            h1:{
              margin: '0.5em 0',
              textTransform: 'none',
              fontSize: '6.5em',
              width: '2.7em',
              lineHeight: '1'
              /* border-top: 10px solid #FF6D6D; */
              /* border-bottom: 10px solid #FF6D6D; */
            }
          }
        },
        {
          heading: 'Let the student work do the talking.',
          text: "Search for courses by comparing the work of students from creative schools.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1521860091/tumblr_o6axauhTur1rb8rhso2_1280_tzqrw8.jpg',
          video: false,
          styles: {
            h1:{
             color: '#FF6D6D',
            }
          }
        },
        {
          heading: 'Personalised application support',
          text: "From enquiry to enrolment... and throughout your whole student journey.",
          background: 'http://res.cloudinary.com/mozaik/image/upload/v1521860341/kim-carpenter-307030-unsplash_tpekck.jpg',
          video: false,
          cta: {
            text: 'Learn More',
            link: '#'
          },
          styles: {
            h1:{
              color: 'black',
              margin: '0.5em 0px',
              textTransform: 'uppercase',
              fontSize: '4em',
              width: '8em',
              lineHeight: '1'
            }
          }
        }
      ],
      settings: {
        className: 'home-slider',
        autoplay: true,
        autoplaySpeed: 12000,
        arrows: false,
        afterChange: (i) => this.setState({ currentSlide: i })
      },
      isOpen: false
    };
  }

  changeSlide(i) {
    this.refs.slider.slickGoTo(i);
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  updateCurrentSlide(i) {
    this.setState({ currentSlide: i });
  }

  render() {
    const { currentSlide, slides, settings, isOpen } = this.state;
    return (
      <div className='home-hero'>
        <Slick ref='slider' { ...settings }>
          { _.map(slides, (slide, i) => {
            return (
              <div key={ i } className='slide' style={{ backgroundImage: `url(${slide.background})` }}>
                <div className='slider-body'>
                  <ReactModal
                    isOpen={isOpen}
                    contentLabel="Modal"
                    onRequestClose={() => this.closeModal()}
                    style={customStyles}
                  >
                      <button className="modal-close-button" onClick={() => this.closeModal()} data-close aria-label="Close modal" type="button">
                      <span aria-hidden="true">&times;</span>
                      </button>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/cliuhi-j7Kw" frameborder="0" allowfullscreen></iframe>
                  </ReactModal>
                  <div className="slide-text">
                    <h1 style={slide.styles.h1}>{ slide.heading }</h1>
                    <p>{ slide.text }</p>
                  </div>
                  { slide.video ? <div className="video-div" onClick={() => this.openModal()}>
                    <img src='/images/buttons/playvideo.png' alt='arrow-down'/>
                    {/*<i onClick={() => this.openModal()} className="fa fa-play fa-3x" aria-hidden="true"></i><p onClick={() => this.openModal()} className="video-text">Play Video</p>*/}</div> : <div /> }
                  { slide.cta ? <a href={slide.cta.link} className="btn">{slide.cta.text}</a> : '' }
                  <div className='dot' onClick={ () => this.changeSlide(i+1) }>
                    <img src='/images/white-arrow-down.png' alt='arrow-down' />
                  </div>
                </div>
              </div>
            );
          }) }
        </Slick>
        {/*<div className='slider-dots'>
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
        </div>*/}
      </div>
    );
  }
}
