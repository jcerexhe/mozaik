import React, { Component } from 'react';
import Lightbox from 'react-images';
import Filter from '../shared/filter.jsx';
import Artwork from './artwork.jsx';
import Footer from '../footer/index.jsx';

export default class HomeArtworkApp extends Component {
  constructor(props) {
    super(props);
    const allImages = _.map(props.artworks, (artwork) => {
      return {
        src: artwork.images.src,
        thumb: artwork.images.thumb,
        title: artwork.name,
        artist: artwork.artist,
        disciplines: artwork.disciplines
      };
    });
    let images;
    let disciplines = [];
    const disciplineList = _.union(['all areas'], ...(_.map(allImages, (img) => {
      return img.disciplines;
    })));
    if (props.course) {
      images = _.filter(allImages, (img) => {
        return _.intersection(img.disciplines, props.course.disciplines).length > 0;
      });
      disciplines = _.intersection(props.course.disciplines, disciplineList);
    } else {
      images = allImages;
    }
    if (disciplines.length === 0) disciplines = ['all areas'];
    this.state = {
      allImages,
      images,
      disciplines,
      disciplineList,
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
        customControls={ [<p>{ currentTitle }</p>,<p>{ currentArtist }</p>,<p className='lightbox-social'></p>] } />
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

  updateDiscipline(val) {
    let { disciplines } = this.state;
    if (val === 'all areas') {
      this.setState({ disciplines: ['all areas'] });
      return;
    }
    _.remove(disciplines, (v) => { return v.indexOf('all areas') != -1 });
    if (disciplines.includes(val))
      _.remove(disciplines, (v) => { return v.indexOf(val) != -1 });
    else
      disciplines.push(val);
    if (disciplines.length == 0)
      disciplines.push('all areas');
    this.setState({ disciplines: [...disciplines] });

    // refine results
    const { artworks } = this.props;
    const { allImages } = this.state;
    if (disciplines.includes('all areas')) {
      this.setState({ images: allImages });
      return;
    }
    const images = _.filter(allImages, (img) => {
      return _.intersection(disciplines, img.disciplines).length > 0;
    })
    this.setState({ images });
  }

  renderImg(img, frame, x, y, width, height){
    let rdmImgIndex = Math.floor(Math.random() * Math.floor(img.length));
    let clipPathUrl = 'url(#home-img-frame-' + frame + ')';
    let imgThumbUrl = img[rdmImgIndex].thumb;

    return (
      <a onClick={ () => this.openLightbox(rdmImgIndex) } className='home-art-img'>
          <image clipPath={clipPathUrl} x={x} y={y} width={width} height={height} xlinkHref={imgThumbUrl} preserveAspectRatio="xMidYMid slice"/>
      </a>
    );
  };

  render() {
    const { artworks } = this.props;
    const { disciplineList, disciplines, images } = this.state;

    return (
      <div>
        {/*Home Artworks Header Text*/}
        <div className="home-artworks-top-text">
          <h1>Search <span>&</span> Play</h1>
          <a href="/search">DISCOVER</a>
        </div>
         <img src='/images/white-arrow-down.png' alt='arrow-down' className='home-right-arrow-button' id="home-artworks-changer-arrow" onClick={() => this.closeLightbox()}/>
        {/*Artworks gallery*/}
        <svg viewBox="0 0 100 190">
          {/*Define polygons for Home Artworks Gallery*/}
          <g>
            {/*Header & Footer Stripes: L to R, T to B*/}
            <clipPath id="top-stripes">
              <polygon points="0,0 100,0 100,15 0,40" fill="#0C2A3E"></polygon>
            </clipPath>
           {/*Art Frames: L to R, T to B*/}
            <clipPath id="home-img-frame-1">
              <polygon points="0,80 0,44 27,37 27,80" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-2">
              <polygon points="31,52 31,36 53,30 53,52" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-3">
              <polygon points="57,52 57,29 100,19 100,52" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-4">
              <polygon points="31,80 31,55 72,55 72,80" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-5">
              <polygon points="76,80 76,55 100,55 100,80" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-6">
              <polygon points="0,83 0,120 37,135 37,83" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-7">
              <polygon points="41,83 41,103 68,103 68,83" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-8">
              <polygon points="71,83 71,125 100,125 100,83" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-9">
              <polygon points="0,123 0,156 37,150 37,138" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-10">
              <polygon points="41,106 41,149 68,145 68,106" fill="#0C2A3E"></polygon>
            </clipPath>
            <clipPath id="home-img-frame-11">
              <polygon points="71,128 71,145 100,141 100,128" fill="#0C2A3E"></polygon>
            </clipPath>
          </g>

          {/*Define images used to fill polygons*/}
          <image height="190" width="100" preserveAspectRatio="xMinYMin meet" xlinkHref="/images/patterns/stripes.jpg" clipPath="url(#top-stripes)"/>

          { artworks.length > 0 ? <g>
            {this.renderLightbox()}
            {this.renderImg(images, 1, 0, 37, 27, 43)}
            {this.renderImg(images, 2, 31, 30, 22, 22)}
            {this.renderImg(images, 3, 57, 19, 43, 33)}
            {this.renderImg(images, 4, 31, 55, 41, 25)}
            {this.renderImg(images, 5, 76, 55, 24, 25)}
            {this.renderImg(images, 6, 0, 83, 37, 52)}
            {this.renderImg(images, 7, 41, 83, 27, 20)}
            {this.renderImg(images, 8, 71, 83, 29, 42)}
            {this.renderImg(images, 9, 0, 123, 37, 33)}
            {this.renderImg(images, 10, 41, 106, 27, 43)}
            {this.renderImg(images, 11, 71, 128, 29, 17)}
          </g> : <g>
              <polygon points="0,80 0,44 27,37 27,80" fill="#0C2A3E"></polygon>
              <polygon points="31,52 31,36 53,30 53,52" fill="#0C2A3E"></polygon>
              <polygon points="57,52 57,29 100,19 100,52" fill="#0C2A3E"></polygon>
              <polygon points="31,80 31,55 72,55 72,80" fill="#0C2A3E"></polygon>
              <polygon points="76,80 76,55 100,55 100,80" fill="#0C2A3E"></polygon>
              <polygon points="0,83 0,120 37,135 37,83" fill="#0C2A3E"></polygon>
              <polygon points="41,83 41,103 68,103 68,83" fill="#0C2A3E"></polygon>
              <polygon points="71,83 71,125 100,125 100,83" fill="#0C2A3E"></polygon>
              <polygon points="0,123 0,156 37,150 37,138" fill="#0C2A3E"></polygon>
              <polygon points="41,106 41,149 68,145 68,106" fill="#0C2A3E"></polygon>
              <polygon points="71,128 71,145 100,141 100,128" fill="#0C2A3E"></polygon>
            </g>
          }
        </svg>
        <div className='home-footer'>
          <Footer/>
        </div>
      </div>

    );
  }
}
