import React, { Component } from 'react';
import Modal from './modal.jsx';

export default class MobileHomeArtworks extends Component {
  constructor(props) {
    super(props);

    // Setup art indeces here so that it won't update everytime another state changes
    let artIndeces = [];
    for (var i=0; i<4; i++){
      let artworks = this.props.artworks
      let rdmArtIndex = Math.floor(Math.random() * Math.floor(artworks.length));
      artIndeces.push(rdmArtIndex);
    }

    this.state = {
      artIndeces: artIndeces,
      artIndex: 0,
      showArtModal: false
    };
  }

  handleOpenArtModal (artIndex) {
    this.setState({ showArtModal: true }, () => {
      document.querySelector('.ReactModal__Body--open').style.overflow = "scroll" // Allows scrolling of main content even with modal open (needed because this is 'hidden' in desktop nav menu and mobile home hero video)
    });
  }

  handleCloseArtModal () {
    this.setState({ showArtModal: false });
  }

  // Returns artwork based on artIndex to the display
  renderImg(artworks, artIndex) {
    let artImgSrc = artworks[artIndex].images.src
    return(
      <div className='col'>
        <div onClick={() => this.setState({artIndex: artIndex}, () => this.handleOpenArtModal())} style={{backgroundImage:'url(' + artImgSrc + ')'}}></div>
      </div>
    )
  }

  render() {
    const { artworks, schoolNames } = this.props;
    const { artIndeces, artIndex, showArtModal } = this.state;
    return (
      <div className='artworks-container' id="home-art-modal-parent"> { /* ID needed for modal config */ }
        <div className='container-fluid'>
          { /* Artworks display */ }
          <div className='row'>
            {this.renderImg(artworks, artIndeces[0])}
            {this.renderImg(artworks, artIndeces[1])}
          </div>
          <div className='row'>
            {this.renderImg(artworks, artIndeces[2])}
            {this.renderImg(artworks, artIndeces[3])}
          </div>
          { /* Modal component for artworks with props passed */ }
          <Modal
            artworks = {artworks}
            artIndex = {artIndex}
            showArtModal = {showArtModal}
            handleCloseArtModal = {() => this.handleCloseArtModal()}
            schoolNames = {schoolNames}
          >
          </Modal>
        </div>
      </div>
    );
  }
}