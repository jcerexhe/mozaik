import React, { Component } from 'react';
import _ from 'lodash';

export default class PerformingArtsApp extends Component {
	render() {
		return (
		<div>
			<div>
				<h1 className="art-page-heading">Performing<br/>Arts</h1>
				<div className='careers-category'>
					<p><a className='category-link' href="#">Acting&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Classical Performance&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Contemporary Performance&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Dance&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Drama&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Jazz&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Music Performance</a><br/>
						<a className='category-link' href="#">Music Composition&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Performing Arts&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Production&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">PlayWriting&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Staging&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Theatre&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Custom Design&nbsp;/&nbsp;</a>
						<a className='category-link' href="#">Live Production</a>
					</p>
				</div>
				<div className='career-paragraph-heading'>
					<p>"They say that the world is a stage, that life is a play and all men and women are merely players.<br/>
					Performing arts involves the learning of skills that require human expression in drama, music or<br/>
					dance that result in stage performances and play in front of a live audience."</p>
				</div>
				<div className='performing-background'>
					{/*<img className="header-colored" src="https://res.cloudinary.com/mozaik/image/upload/v1522218659/study-areas/Performing_arts.png" />*/}
					<img className="header-original" src="https://res.cloudinary.com/mozaik/image/upload/v1522287493/study-areas/pexels-photo-415307.jpg" />		
				</div>
			</div>
			<div className='careers-container'>
  				<h1>CAREERS</h1>
  				<div className='careers'>
	  				<ul className='careers-lists'>
	  					<a className='careers-link' href="#">Costume Design</a>
						<li><a className='careers-link' href="#">Band Music</a></li>
						<li><a className='careers-link' href="#">Circus Performer</a></li>
						<li><a className='careers-link' href="#">Theatre Director</a></li>
						<li><a className='careers-link' href="#">Ballet Dancer</a></li>
						<li><a className='careers-link' href="#">Set Decorators</a></li>
						<li><a className='careers-link' href="#">Playwriter</a></li>
						<li><a className='careers-link' href="#">Dance Teacher</a></li><br/>
						<li><a className='careers-link' href="#">Choregrapher</a></li>
						<li><a className='careers-link' href="#">Music Teacher</a></li>
						<li><a className='careers-link' href="#">Ballet Dancer</a></li>
						<li><a className='careers-link' href="#">Classic or Contemporary Dance</a></li>
					</ul>

				</div>
				<div className='alumni'>
					<div className='alumni-qoute'>
						<p>"I GET TO DO WHAT<br/>I LOVE EVERYDAY"</p>
					</div>
					
					<div className='alumni-content'>
						<div className='alumni-image'>
						</div>
						<div className="alumni-details">
							<p className='alumni-name'>JAMES JACKSON</p>
							<p className="alumni-degree">BACHELOR OF MODERN DANCE</p><br/>
							<p className="alumni-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut morbi. Condimentum vitae sapien pellentesque habitant.
						 Ut etiam sit amet nisl purus in mollis nunc sed. Non consectetur a erat nam at lectus urna duis. Placerat orci nulla pellentesque dignissim enim sit. Nisl vel pretium lectus quam id leo. Consequat mauris nunc congue nisi vitae. Id ornare arcu odio ut sem nulla. Convallis a cras semper auctor. Cras sed felis 
						 eget velit aliquet sagittis id. Massa enim nec dui nunc mattis enim ut tellus elementum.</p>
						</div>	
					</div>
				</div>
				<div className='enquire-img' >
					<img src="/images/buttons/Enquire.png" />
				</div>
				<div className='performing-art-contact'>
					<div className='performing-art-inside-scoop'>
						<img className='performing-art-inside-scoop-img' src='/images/buttons/Get-the-inside-scoop.png' /><br/>
						<input className='performing-art-email' placeholder="Email" /><br/>
						<img className='performing-art-subscribe-img' src='/images/buttons/subscribe.png' />	
					</div>
				</div>
			</div>
		
	</div>
        	      
		);
	}
}