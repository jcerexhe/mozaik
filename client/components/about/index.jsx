import React, { Component } from 'react';
import _ from 'lodash';

export default class AboutApp extends Component {
	render() {
		return (
		<div>
			<div className='about-heading'>
				<div className='about-info'>
					<h1 className='hidden-line'> Using text to Hidden Line </h1>
					<h1 className='about-title'> About us </h1>
				</div>
			</div>

			<div className='about-image'>
				<p>img src="#" </p>
			</div>
			<div className='about-us-container'>
				<p>content </p>
			</div>
			<div className='part-footer'>
				<img src="/images/footer/black-lines.png" />
			</div>


		</div>
        	      
		);
	}
}