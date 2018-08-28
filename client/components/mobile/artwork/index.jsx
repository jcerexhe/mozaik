import React, { Component } from 'react';
import Lightbox from 'react-images';
import MobileFilter from '../shared/filter.jsx';
import Artwork from './artwork.jsx';

export default class MobileArtwork extends Component {
  constructor(props) {
    super(props);

    let displayArry = []; /* This will contain the indeces of the artworks that will be displayed */
    let allArtworks = props.artworks

    // Loop through displayedArt first so that displayArry will follow the order of displayedArt
    _.forEach( props.displayedArt, (display) => { /* Loop through displayedArt so that each element is compared with all artworks */
      _.forEach( allArtworks, (artwork) => { /* Loop through all artworks to check if each one matches with current displayed art */
        if ( display === artwork.image) { /* If there's a match */
          let artworkIndex = allArtworks.indexOf(artwork); /* Get index of artwork */
          displayArry.push(artworkIndex); /* Add that index to display array */
        }
      })
    })

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
      indexList: [],
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
      artDisplay: displayArry
    };
  }

  closeLightbox() {
    this.setState({ isOpen: false });


 } onClickPrev() {
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

  renderImg(img, i){
    let artDisplayIndex = this.state.artDisplay /* Contains indeces of artworks to display ordered from L -> R in the page */
    if (artDisplayIndex[i]) { /* i corresponds to its position in artDisplayIndex, so the art with that index in artworks will show in the artbox that has the i value (in the return function in the render function)*/
      return(
          <div  className="art-box-img" style={{backgroundImage: 'url('+ img[artDisplayIndex[i]].thumb +')'}} >
            <div className="img-details" onClick={ () => this.openLightbox(artDisplayIndex[i]) }>
              <h2>{ img[artDisplayIndex[i]].title }</h2>
              <p>{ img[artDisplayIndex[i]].artist }</p>
            </div>
          </div>
        );
    } else { /* If there is no specified art to display, the first 7 in artworks will be displayed */
      return(
          <div  className="art-box-img" style={{backgroundImage: 'url('+ img[i].thumb +')'}} >
            <div className="img-details" onClick={ () => this.openLightbox(i) }>
              <h2>{ img[i].title }</h2>
              <p>{ img[i].artist }</p>
            </div>
          </div>
        );
    }
  }

  updateIndexList(){
    this.setState({indexList: []});
  }

  render() {
    const { artworks, displayedArt } = this.props;
    const { disciplineList, disciplines, images, allImages, artDisplay } = this.state;
    console.log('artworks')
    console.log(artworks)
    console.log('displayedArt')
    console.log(displayedArt)
    console.log('artDisplay')
    console.log(artDisplay)
    let gt = "+";
    return (
      <div className='mobile-artwork-container'>
        <div className='m-grey-bg'>
          <div className='m-artworks'>
            <div className='m-artwork-container'>
            { artworks.length > 0 ? this.renderLightbox() : <div /> }
              <div className="art-box">
                <div className="art-box-1">
                  { this.renderImg(images, 0) }
                </div>
                <div className="art-box-1">
                  <div className="art-box-img">
                    { this.renderImg(images, 1) }
                  </div>
                </div>
              </div>
              <div className="art-box">
                <div className="art-box-1">
                  { this.renderImg(images, 2) }
                </div>
                <div className="art-box-1">
                  <div className="art-box-img">
                    { this.renderImg(images, 3) }
                  </div>
                </div>
              </div>
              <div className="m-artwork-next">
                <button onClick={()=>this.updateIndexList()}><span>{gt}</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}