import React, { Component } from 'react';
import Lightbox from 'react-images';
import Filter from '../shared/filter.jsx';
import Artwork from './artwork.jsx';

export default class ArtworkApp extends Component {
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

  render() {
    const { artworks } = this.props;
    const { disciplineList, disciplines, images } = this.state;
    return (
      <div className='grey-bg'>
        <div className='filter-container'>
          <div className='filter'>
            <h2>disciplines</h2>
            <Filter
              filterItems={ disciplineList }
              activeItems={ disciplines }
              onClick={ (val) => this.updateDiscipline(val) }
              isHome={ false }
            />
          </div>
          <div className='refine-button'>
            <a href='/discover' className='btn btn-full-width'>refine</a>
          </div>
        </div>
        <div className='artworks'>
          <div className='artwork-container'>
          { artworks.length > 0 ? this.renderLightbox() : <div /> }
            <ul className='artwork-slides'>
              { _.map(images, (img, index) => {
                return (
                  <li onClick={ () => this.openLightbox(index) }>
                    <p>{ img.artist }</p>
                    <p className='artwork-discipline'>{ img.disciplines[0] }</p>
                    <h4>{ img.title }</h4>
                    <Artwork src={ img.thumb } />
                  </li>
                );
              }) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
