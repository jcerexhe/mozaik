import React, { Component } from 'react';
import Lightbox from 'react-images';
import Artwork from './artwork.jsx';

export default class ArtworkApp extends Component {
  constructor(props) {
    super(props);
    const images = _.map(props.artworks, (artwork) => {
      return {
        src: artwork.images.src,
        thumb: artwork.images.thumb,
        title: artwork.name,
        artist: artwork.artist
      };
    });
    this.state = {
      images: images,
      isOpen: false,
      currentImage: 0,
      currentTitle: images[0].title,
      currentArtist: images[0].artist,
      styles: {
        container: {
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '0px'
        },
        image: {
          maxHeight: 'calc(100vh - 150px) !important'
        },
        close: {
          position: 'fixed',
          top: '25px',
          right: '25px',
          fill: '#000000',
        },
        arrow: {
          backgroundColor: 'transparent',
          fill: '#000000',
        },
        thumbnail__active: {
          boxShadow: '0 0 0 2px #000000'
        }
      },
    };
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  onClickPrev() {
    const { images, currentImage } = this.state;
    const nextImage = images[currentImage - 1];
    this.setState({
      currentImage: currentImage - 1,
      currentTitle: nextImage.title,
      currentArtist: nextImage.artist
    });
  }

  onClickNext() {
    const { images, currentImage } = this.state;
    const nextImage = images[currentImage + 1];
    this.setState({
      currentImage: currentImage + 1,
      currentTitle: nextImage.title,
      currentArtist: nextImage.artist
    });
  }

  renderLightbox() {
    const { images, isOpen, currentImage, styles, currentTitle, currentArtist } = this.state;
    console.log(currentTitle, currentArtist);
    return (
      <Lightbox
        images={ images }
        isOpen={ isOpen }
        backdropClosesModal={ true }
        onClickPrev={ () => this.onClickPrev() }
        onClickNext={ () => this.onClickNext() }
        onClose={ () => this.closeLightbox() }
        currentImage={ currentImage }
        showImageCount={ false }
        theme={ styles }
        customControls={ [<p>{ currentTitle }</p>,<p>{ currentArtist }</p>,<p className='lightbox-social'>social</p>] } />
    );
  }

  openLightbox(currentImage) {
    const { images } = this.state;
    const nextImage = images[currentImage];
    this.setState({
      isOpen: true,
      currentImage,
      currentTitle: nextImage.title,
      currentArtist: nextImage.artist
    })
  }

  render() {
    const { images } = this.state;
    return (
      <div className='artworks'>
        <div className='artwork-container'>
          { this.renderLightbox() }
          <ul className='artwork-slides'>
            { _.map(images, (img, index) => {
              return (
                <li onClick={ () => this.openLightbox(index) }>
                  <Artwork src={ img.thumb } />
                </li>
              );
            }) }
          </ul>
        </div>
      </div>
    );
  }
}
