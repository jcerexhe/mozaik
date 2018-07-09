import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import ReactModal from 'react-modal';
import Footer from '../footer/index.jsx';

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
          heading: '',
          headingImg: "/images/MozaikPlay.png",
          text: "Deciding what to study is tricky. We'll help",
          br:"you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1524642297/cory-gazaille-425907-unsplash_yhogbw.png',
          video: true,
          styles: {
            h1:{
              margin: '0',
              position: 'relative',
              width: '35%',
              height: '20vw',
              bottom: '20px'
            }
          }
        },
        {
          heading: 'Let the student work do the talking.',
          text: "Search for courses by comparing the work",
          br:"of students from creative schools.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/q_auto/v1521860091/tumblr_o6axauhTur1rb8rhso2_1280_tzqrw8.jpg',
          student: 'Ernest Becerra',
          school: 'Full Sail University',
          video: false,
          cta: {
            text: 'Start Searching',
            link: '/search'
          },
          styles: {

            h1:{},

            p:{

              position: 'absolute',
              left: '85%'
            },
        },
        {
          heading: 'Personalised',
          headingbr1:'application',
          headingbr2:'support',
          text: "From enquiry to enrolment...",
          br:"and throughout your whole student journey.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/q_auto/v1523264291/HeroSlide3Image_fwxq00.png',
          video: false,
          cta: {
            text: 'Learn More',
            link: '/agency-mozaik'
          },
          styles: {
            h1:{
              color: '#181818',
              width: '30vw',
              lineHeight: '1',
              fontFamily: 'Montserrat Bold',
              fontSize: '4vw'
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
    let navLogo = document.querySelector('.logo');
    if (this.state.currentSlide == 0) {
      navLogo.style.margin = '0 auto';
    } else {
      navLogo.style.margin = '0';
    };
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
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AngWIawVV6k" frameborder="0" allowfullscreen></iframe>
                  </ReactModal>
                  <div className="slide-text">
                    { slide.headingImg ? <h1 style={slide.styles.h1}><img src={slide.headingImg}/></h1> : <h1 style={slide.styles.h1}>{slide.heading}
                    <br/>{slide.headingbr1}<br/>{slide.headingbr2}</h1> }
                    <br/><br/>
                    <p>{ slide.text }</p>
                    <p>{ slide.br }</p>
<<<<<<< HEAD
                    <p style={slide.styles.p}> { slide.student}</p><br/>
                    <p style={slide.styles.p}> { slide.school}</p>
=======
                    <p style={slide.styles.p}>{ slide.student}</p> <br/>
                    <p style={slide.styles.p}>{ slide.school}</p>
>>>>>>> bb14b87e6d0ef886adb298e7ffc89ab888f79884
                  </div>
                  { slide.video ? <div className="video-div" onClick={() => this.openModal()}>
                    <img src='/images/buttons/playvideo.png' alt='arrow-down'/>
                   {/* <i onClick={() => this.openModal()} className="fa fa-play fa-3x" aria-hidden="true"></i><p onClick={() => this.openModal()} className="video-text">Play Video</p>*/}</div> : <div /> } 
                  { slide.cta ? <svg className='hero-cta-container' viewBox='0 0 150 65' preserveAspectRatio='none'><polyline points="40,65 0,65 0,0 40,0" x="0" y="0"/><polyline points="110,0 150,0 150,65 110,65"/><a href={slide.cta.link}><text fill="white" textAnchor="middle" x='75' y='40'>{slide.cta.text}</text></a></svg> : '' }
                  <img src='/images/white-arrow-down.png' alt='arrow-down' className='home-right-arrow-button' onClick={ () => this.changeSlide(i+1) }/>
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
