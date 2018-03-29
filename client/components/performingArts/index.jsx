import React, { Component } from 'react';
import _ from 'lodash';

export default class PerformingArtsApp extends Component {
	render() {
		return (
		<div>
			<div>
				<h1 className="art-page-heading">Performing Arts</h1>
				<div className='careers-category'>
					<p><a>Acting/</a>
						<a>Classical Performance/</a>
						<a>Contemporary Performance/</a>
						<a>Dance/</a>
						<a>Drama/</a>
						<a>Jazz/</a>
						<a>Music Performance</a><br/>
						<a>Music Composition/</a>
						<a>Performing Arts/</a>
						<a>Production/</a>
						<a>PlayWriting/</a>
						<a>Staging/</a>
						<a>Theatre</a>
						<a>Custom Design/</a>
						<a>Live Production</a>
					</p>
				</div>
				<div className='career-paragraph-heading'>
					<p>"They say that the world is a stage, that life is a play and all men and women are merely players.<br/>
					Performing arts involves the learning of skills that require human expression in drama, music or<br/>
					dance that result in stage performances and play in front of a live audience."</p>
				</div>
				<div className='performing-background'>
					<img src="https://res.cloudinary.com/mozaik/image/upload/v1522218659/study-areas/Performing_arts.png" />
				</div>
			</div>
			<div className='careers-container'>
  	
			</div>


			<div className='art-contact'>
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