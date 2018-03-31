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
					{/*<img src="https://res.cloudinary.com/mozaik/image/upload/v1522287493/study-areas/pexels-photo-415307.jpg" />*/}	
					<img src="https://res.cloudinary.com/mozaik/image/upload/v1522287493/study-areas/pexels-photo-415307.jpg" />			
				</div>
			</div>
			<div className='careers-container'>
  				<p>CAREERS</p>
  				<div className='careers'>
	  				<p><a className='careers-link' href="#">Costume Design&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Band Music&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Circus Performer&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Theatre Director&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Ballet Dancer&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Set Decorators&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Playwriter&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Dance Teacher</a><br/>
						<a className='careers-link' href="#">Choregrapher&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Music Teacher&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Ballet Dancer&nbsp;/&nbsp;</a><span className="fa fa-circle"></span>
						<a className='careers-link' href="#">Classic or Contemporary Dance</a>
					</p>
				</div>
				<div className='teacher-content'>
					<img className='teacher-img' src="#" />
					<p className="teacher-name">JAMES JACKSON</p>
					<p className="teacher-degree">BACHELOR OF MODERN DANCE</p><br/>
					<p className="teacher-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut morbi. Condimentum vitae sapien pellentesque habitant.
					 Ut etiam sit amet nisl purus in mollis nunc sed. Non consectetur a erat nam at lectus urna duis. Placerat orci nulla pellentesque dignissim enim sit. Nisl vel pretium lectus quam id leo. Consequat mauris nunc congue nisi vitae. Id ornare arcu odio ut sem nulla. Convallis a cras semper auctor. Cras sed felis 
					 eget velit aliquet sagittis id. Massa enim nec dui nunc mattis enim ut tellus elementum.</p>
				</div>
				<div className='teacher-qoute'>
					<p>"I GET TO DO WHAT<br/>I LOVE EVERYDAY"</p>
				</div>
				<div className='enquire-img'>
					<img src="/images/buttons/Enquire.png" />
				</div>
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