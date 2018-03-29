import React, { Component } from 'react';
import _ from 'lodash';

export default class PerformingArtsApp extends Component {
	render() {
		return (
		<div>
			<h1 className="art-page-heading">Performing Arts</h1>
			<div className='about-us-contact'>
				<div className='inside-scoop'>
					<div className='inside-scoop'>
					<img className='inside-scoop-img' src='/images/buttons/Get-the-inside-scoop.png' /><br/>
					<input className='email' placeholder="Email" />
					<br/>
					<img className='subscribe-img' src='/images/buttons/subscribe.png' />
				</div>
				</div>
			</div>
		</div>
        	      
		);
	}
}