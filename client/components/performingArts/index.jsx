import React, { Component } from 'react';
import _ from 'lodash';

export default class PerformingArtsApp extends Component {
	render() {
		return (
		<div>
			<div className='performing-heading'>
				<div className='performing-background-img'>
				</div>
				<div className='performing-info'>
					<h1 className='hidden-line'>Using text to Hidden Line </h1>
					<p className='performing-title'>Performing Arts</p>
				</div>
			</div>

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