import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';

export default class PerformingArtsApp extends Component {

constructor(props) {
    super(props);
}
	render() {
		const { studyarea } = this.props;

		{
			// to get the value use: 
			// studyarea.name of field

		}

		return (
		<div>
			<div>
				<h1 className="performing-arts-page-heading">Performing<br/>Arts</h1>
				<div className='performing-arts-study-disciplines'>
					<p><a className='study-link' href="#">Acting&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Classical Performance&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Contemporary Performance&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Dance&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Drama&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Jazz&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Music Performance</a><br/>
						<a className='study-link' href="#">Music Composition&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Performing Arts&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Production&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">PlayWriting&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Staging&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Theatre&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Custom Design&nbsp;/&nbsp;</a>
						<a className='study-link' href="#">Live Production</a>
					</p>
				</div>
				<div className='performing-arts-heading-description'>
					<p>" { studyarea.description } "</p>
				</div>
				<div className='performing-arts-background'>
					<img className="header-colored" src="https://res.cloudinary.com/mozaik/image/upload/v1522218659/study-areas/Performing_arts.png" />
					{/*<img className="header-original" src="https://res.cloudinary.com/mozaik/image/upload/v1522806278/study-areas/pexels-photo-415307.jpg" />*/}	
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
				<div className='performing-art-alumni'>
					<div className='performing-art-alumni-qoute'>
						<p>"I GET TO DO WHAT<br/>I LOVE EVERYDAY"</p>
					</div>
					
					<div className='performing-art-alumni-content'>
						<div className='performing-art-alumni-image'>
						</div>
						<div className="performing-art-alumni-details">
							<p className='performing-art-alumni-name'>JAMES JACKSON</p>
							<p className="performing-art-alumni-degree">BACHELOR OF MODERN DANCE</p><br/>
							<p className="performing-art-alumni-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut morbi. Condimentum vitae sapien pellentesque habitant.
						 Ut etiam sit amet nisl purus in mollis nunc sed. Non consectetur a erat nam at lectus urna duis. Placerat orci nulla pellentesque dignissim enim sit. Nisl vel pretium lectus quam id leo. Consequat mauris nunc congue nisi vitae. Id ornare arcu odio ut sem nulla. Convallis a cras semper auctor. Cras sed felis 
						 eget velit aliquet sagittis id. Massa enim nec dui nunc mattis enim ut tellus elementum.</p>
						</div>	
					</div>
				</div>
				<div className='performing-art-enquire-img' >
					<img src="/images/buttons/Enquire.png" />
				</div>
			</div>
			<div className='performing-arts-footer'>
				<Footer/>
			</div>
	</div>
        	      
		);
	}
}