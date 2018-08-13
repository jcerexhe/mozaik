import React, { Component } from 'react';
import ReactModal from 'react-modal';
// Config for react-modal
ReactModal.setAppElement('body'); // To allow change of modal's parent
// Custom styles for modal
let modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
  },
  content: {
    backgroundColor: '#ffffff',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height: '80%',
    width: '55%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '0',
    padding: '0',
    boxShadow: '5px 5px 15px #000',
    overflow: 'scroll'
  }
}

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  getArtModalParent() {
    return document.querySelector('#home-art-modal-parent'); // In ./artworks.jsx
  }

  render() {
    const { artworks, artIndex, showArtModal, handleCloseArtModal, schoolNames } = this.props; // See 'Modal' props in ./artworks.jsx

    // Get school acronym of artwork
    let artSchoolName = artworks[artIndex].school_name;
    let artSchoolAcronym;

    if (artSchoolName) {
      schoolNames.map(schoolName => {
        if (schoolName.full.toLowerCase() == artSchoolName.toLowerCase()) {
          artSchoolAcronym = schoolName.acronym
        };
      });
    };


    return (
      <ReactModal
        isOpen={showArtModal}
        onRequestClose={handleCloseArtModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Art Modal"
        parentSelector={() => this.getArtModalParent()}
        style={modalStyles}
      >
        <div className="art-modal-image" style={{backgroundImage:'url(' + artworks[artIndex].images.src + ')'} /*Change style here since this varies*/}></div>
        <div className="art-modal-caption">
          <div className="caption-text">
            <p>{artworks[artIndex].artist}</p>
            <p>{artSchoolAcronym}</p>
          </div>
          <button className="button">VIEW MORE</button>
        </div>
      </ReactModal>
    );
  }
}