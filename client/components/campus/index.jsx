import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import _ from 'lodash';
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '200vh'
  }
};

const Map = withGoogleMap(props => (
  <GoogleMap
    zoom={15}
    center={ props.coords }
  >
    <Marker position={ props.coords } />
  </GoogleMap>
));


export default class CampusApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: props.campuses,
      activeCampus: props.campuses[0],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  setCampus(activeCampus) {
    this.setState({ activeCampus });
  }

  render() {
    const { campuses, activeCampus } = this.state;
    return (
      <div style={{width: "65vh"}}>
        <h2>
        <a onClick={this.openModal}>locations</a>
        </h2>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='campus-container'>
         {
          // <button onClick={this.closeModal} className="modal-x">x</button> 
        }
          {
        // <div className='campus-buttons'>
        //   { _.map(campuses, (campus) => {
        //     return (
        //       <a className={ 'campus' + (activeCampus == campus ? ' active' : '') } onClick={ () => this.setCampus(campus) }>
        //         { campus.campus }
        //       </a>
        //     );
        //   }) }
        // </div>
        }
        <Map
          coords={ activeCampus.coordinates }
          containerElement={
            <div style={{ height: '400px' }} />
          }
          mapElement={
            <div style={{ height: '400px' }} />
          }
        />
      </div>
        </Modal>
      </div>
      
    );
  }
}
