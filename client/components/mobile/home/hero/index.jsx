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

export default class MobileHomeHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          heading: '',
          headingImg: "/images/mobile/home-hero-mozaikplay.png",
          text: "Deciding what to study is tricky. We'll help",
          br:"you find the right course in the creative industry.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/v1524642297/cory-gazaille-425907-unsplash_yhogbw.png',
          video: true,
          styles: {
            h1:{
              position: 'relative',
              height: '18vw',
            }
          }
        },
        {
          heading: 'Personalised',
          headingbr1:'application support',
          text: "From enquiry to enrolment...",
          br:"and throughout your whole student journey.",
          background: 'https://res.cloudinary.com/mozaik/image/upload/q_auto/v1523264291/HeroSlide3Image_fwxq00.png',
          video: false,
          cta: {
            text: 'find out more',
            link: '/agency-mozaik'
          },
          styles: {
            h1:{
              color: '#181818',
              width: '50%',
              fontFamily: "Montserrat Bold",
              fontSize: '3vw',
              marginTop: '10vw',
            }
          }
        }
      ],
      settings: {
        className: 'slider',
        autoplay: true,
        autoplaySpeed: 12000,
        arrows: false,
        dots: true,
      },
      isOpen: false
    };
  }

  closeModal() {
    document.querySelector('.ReactModal__Body--open').style.overflow = "scroll" // Without this, you won't be able to scroll the main content for some reason
    this.setState({ isOpen: false });
  }

  openModal() {
    this.setState({ isOpen: true }, () => {
      document.querySelector('.ReactModal__Body--open').style.overflow = "hidden" // Prevents scrolling of main content with modal open (needed because this is 'scroll' in mobile home artworks video)
    });
  }

  render() {
    const { slides, settings, isOpen } = this.state;
    return (
      <div className='hero-container'>
        <Slick ref='slider' { ...settings }>
          { _.map(slides, (slide, i) => {
            return (
              <div key={ 'slide-' + (i+1) } className="slide" style={{ backgroundImage: `url(${slide.background})` }}>
                <div className='slide-body'>
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
                    <p>
                      { slide.text }<br/>
                      { slide.br }
                    </p>

                    { slide.video ? <div className="video-play" onClick={() => this.openModal()}></div> : <div></div> }

                    { slide.cta ?
                      <div className='cta-container'>
                        <svg viewBox="0 0 110 40" preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polyline points="30,40 0,40 0,0 30,0" x="0" y="0"/><polyline points="80,0 110,0 110,40 80,40"/></svg>
                        <a href={slide.cta.link}>{slide.cta.text}</a>
                      </div> : <div></div> }
                  </div>
                </div>
              </div>
            );
          }) }
        </Slick>
      </div>
    );
  }
}