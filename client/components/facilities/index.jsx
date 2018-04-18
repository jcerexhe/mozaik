// import React, { Component } from 'react';
// import Slick from 'react-slick';
// import Lightbox from 'react-images';
// import _ from 'lodash';
// import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

// export default class FacilitiesApp extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {};
//     const images = _.map(props.images, (faci) => {
//       return {
//           src: faci
//         };
//       });
//     this.state = {
//       photoIndex: 0,
//       isOpen: false,
//       images,
//       currentImage: 0,
//       styles: {
//         container: {
//           background: 'rgba(255, 255, 255, 0.95)',
//           padding: '0px'
//         },
//         image: {
//           maxHeight: 'calc(100vh - 150px) !important'
//         },
//         close: {
//           position: 'fixed',
//           top: '25px',
//           right: '25px',
//           fill: '#000000',
//         },
//         arrow: {
//           backgroundColor: 'transparent',
//           fill: '#000000',
//         },
//         thumbnail__active: {
//           boxShadow: '0 0 0 2px #000000'
//         }
//       }
//     };
//   }

//   closeLightbox() {
//     this.setState({ isOpen: false });
//   }

//   onClickPrev() {
//     const { images, currentImage } = this.state;
//     const nextImage = images[currentImage - 1];
//     this.setState({
//       currentImage: currentImage - 1
//     });
//   }

//   onClickNext() {
//     const { images, currentImage } = this.state;
//     const nextImage = images[currentImage + 1];
//     this.setState({
//       currentImage: currentImage + 1
//     });
//   }

//   renderLightbox() {
//     const { images, isOpen, currentImage, styles } = this.state;
//     return (
//       <Lightbox
//         images={ images }
//         isOpen={ isOpen }
//         backdropClosesModal={ true }
//         onClickPrev={ () => this.onClickPrev() }
//         onClickNext={ () => this.onClickNext() }
//         onClose={ () => this.closeLightbox() }
//         currentImage={ currentImage }
//         showImageCount={ false }
//         theme={ styles }
//         />
//     );
//   }

//   render() {
//     // const settings = {
//     //   autoplay: true,
//     //   arrows: true,
//     //   dots: false,
//     //   nextArrow: RightArrow,
//     //   prevArrow: LeftArrow,
//     // }
//     const images = this.props.images;
//     console.log(images.length);
//     console.log(images[0]);
//     const { photoIndex, isOpen } = this.state;        
//     return (


//     <div style={{width: "65vh"}}>
//       <h2>
//         <a onClick={() => this.setState({ isOpen: true })}>
//           Facilities
//         </a>
//       </h2>
//         {this.renderLightbox()}
//     </div>

//     );
//   }
// }


import React, { Component } from 'react';
import Slick from 'react-slick';
import _ from 'lodash';
import { LeftArrow, RightArrow } from '../shared/arrows.jsx';

export default class FacilitiesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      autoplay: true,
      arrows: true,
      dots: false,
      nextArrow: RightArrow,
      prevArrow: LeftArrow,
    }
    return (
      <div style={{width: '50vw', height: '60vh', marginTop: '-110px'}}>
        <div className='facilities-slider'>
          <Slick { ...settings }>
            { _.map(this.props.images, (img) => {
              return <img src={ img } />
            }) }
          </Slick>
        </div>
      </div>
    );
  }
}


