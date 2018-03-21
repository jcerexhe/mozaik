import React, { Component } from 'react';
import _ from 'lodash';

export default class AboutApp extends Component {
	render() {
		return (
		<div>
		  <div className='static-about'>
	        <div className='about-us'>
	          <h3 className='hiddenline'>Hidden Line</h3>
	          <p className='about-title'>About Us</p>
	        </div>
	      </div>
	      <div className="about-image">
	      	<img className="#" src="#"/>
	      </div>

	      <div className="about-us-container">
	      <p>hello</p>
	      </div>
	      
	      <div className="part-footer">
	      	<img src="/images/footer/black-lines.png"/>
	      </div>
	    </div> 
	        	      
		);
	}
}