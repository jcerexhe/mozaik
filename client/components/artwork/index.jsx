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

  renderImg(img, i){
    const { indexList, isOpen } = this.state;
    // console.log(parseInt(i));

    let imgIndex;
    let styled;
    var x = i+1;
    var y = 5;
    // if(img.length >= 7){
    //   imgIndex = i;
    // }else{
    //   imgIndex = 0;
    // }
    
    // console.log(img.length);  

    // console.log()     // 

      // let check = true;
      // while(check == true){
        imgIndex = Math.floor(Math.random() * Math.floor(img.length));
      //   if(indexList.includes(imgIndex)){
      //     check=true;
      //   }else{
      //     check=false;
      //     indexList.push(imgIndex);
      //   }
      // }
    

    // if(indexList.includes(imgIndex) == false){
    //   indexList.push(imgIndex);
    // }

    // let yellow = "green";

    //   styled = (<style dangerouslySetInnerHTML={{__html: 

    //     '.art-box-2-diagonal .art-box-img{ background-image: none !important; }' 

    //     }} />);

      
      // style={{backgroundImage: 'url('+ img[imgIndex].thumb +')'}}

    return(
        <div  className="art-box-img" style={{backgroundImage: 'url('+ img[imgIndex].thumb +')'}} >
          <div className="img-details" onClick={ () => this.openLightbox(imgIndex) }>
            <h2>{ img[imgIndex].title }</h2>
            <p>{ img[imgIndex].artist }</p>
          </div>

        </div>
      );
  }

  updateIndexList(){
    this.setState({indexList: []});
  }

  render() {
    const { artworks } = this.props;
    const { disciplineList, disciplines, images, allImages } = this.state;
    let gt = ">";
    return (
      <div className='grey-bg'>
        <div className='artworks'>
          <div className='artwork-container'>
          { artworks.length > 0 ? this.renderLightbox() : <div /> }
            <div className="art-box">
              <div className="art-box-1">
                { this.renderImg(images, 0) }
              </div>  
              <div className="art-box-1">
                <div className="art-box-1-img">
                  { this.renderImg(images, 1) }
                </div>
                <div className="art-box-1-img">
                  { this.renderImg(images, 2) }
                </div>
              </div>
              
            </div>
            <div className="art-box">
              <div className="art-box-2">
                <div className="art-box-2-img right">
                  { this.renderImg(images, 3) }
                </div>
                <div className="art-box-2-img left">
                  { this.renderImg(images, 5) }
                </div>
              </div>
              <div className="art-box-2-diagonal">
                { this.renderImg(images, 4) }
              </div>
            </div>
            <div className="art-box-last">
              <div className="artwork-next">
                <button onClick={()=>this.updateIndexList()} > {gt} </button>
              </div>
              <div className="art-box-3">
                <div className="art-box-3-img">
                  { this.renderImg(images, 6) }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
