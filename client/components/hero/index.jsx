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
          heading: 'Mozaik Play.',
          text: "Deciding what to study is tricky. We'll help you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1510898000/Dancer_Inspire_yasy7l.png',
          video: true
        },
        {
          heading: 'Let the student work do the talking.',
          text: "Search for courses by comparing the work of students from creative schools.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1509676460/navis_reversed_kjt1o5.jpg',
          video: false
        },
        {
          heading: 'Personalised application support',
          text: "We can help you with the full application process. From enquiry to enrolment... and throughout your whole student journey.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1510897063/Guy_with_headphones_Apply_dhhdkv.png',
          video: false,
          cta: {
            text: 'Learn More',
            link: '#'
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
                  <h1>{ slide.heading }</h1>
                  <p>{ slide.text }</p>
                  { slide.video ? <div><i onClick={() => this.openModal()} className="fa fa-play-circle-o fa-3x" aria-hidden="true"></i><br /><p onClick={() => this.openModal()} className="video-text">Play Video</p></div> : <div /> }
                  { slide.cta ? <a href={slide.cta.link} className="btn">{slide.cta.text}</a> : '' }
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
