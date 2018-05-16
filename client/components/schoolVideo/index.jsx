import React, { Component } from 'react';
import _ from 'lodash';
import ReactModal from 'react-modal';

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: 'none',
    zIndex: 1000,
  },
  content : {
    backgroundColor: '#181818',
    border: 'none',
    overflow: 'hidden',
    display: 'block'
  }
};


export default class SchoolVideoApp extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
	    	isOpen: false
	     }
    }
    closeModal() {
    	this.setState({ isOpen: false });
  	}

	openModal() {
    	this.setState({ isOpen: true });
    }
   
     
  render() {
  const {isOpen } = this.state;
  const {video} = this.props;
  var hvideo = "https://www.youtube.com/embed/AngWIawVV6k"

    return (
   
    		<div>	   
                  <ReactModal
                    isOpen={isOpen}
                    contentLabel="Modal"
                    onRequestClose={() => this.closeModal()}
                    style={customStyles}
                  >
                    <button className="modal-close-button" onClick={() => this.closeModal()} data-close aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <iframe width="100%" height="100%" src={video} frameborder="0" allowfullscreen></iframe>
                  </ReactModal>
                  {video ? <div className="video-div" onClick={() => this.openModal()}>
                    <img src='/images/buttons/playvideo.png' alt='arrow-down'/>
                  </div> : <div></div>}    
            </div> 

             
     );
  }
}




