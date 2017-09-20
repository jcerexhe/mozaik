import React, { Component } from 'react';
import Lightbox from 'react-images';
import Artwork from './artwork.jsx';

export default class ArtworkApp extends Component {
  constructor(props) {
    super(props);
    console.log(props.artworks);
    const images = _.map(props.artworks, (artwork) => {
      return {
        src: artwork.images.src,
        thumb: artwork.images.thumb,
        title: artwork.name,
        description: artwork.artist
      };
    });
    this.state = {
      images: images,
      isOpen: false,
      currentImage: 0,
    };
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  onClickPrev() {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }

  onClickNext() {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }

  renderLightbox() {
    const { images, isOpen, currentImage } = this.state;
    return (
      <Lightbox
        images={ images }
        isOpen={ isOpen }
        backdropClosesModal={ true }
        onClickPrev={ () => this.onClickPrev() }
        onClickNext={ () => this.onClickNext() }
        onClose={ () => this.closeLightbox() }
        showThumbnails={ true }
        currentImage={ currentImage } />
    );
  }

  openLightbox(currentImage) {
    this.setState({
      isOpen: true,
      currentImage
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
