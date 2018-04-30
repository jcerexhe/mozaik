import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';

export default class SelectAreaApp extends Component {
	render() {
		return (
		<div>
			<h1 className="select-area-heading">Select<br/>Study Areas</h1>
			<div className="display-select-area">
				<div className='select-area-image'>
				</div>
				<div className='select-area-container'>
					<div className='select-area-text'>
						<h1>EXPLORE THE DIFFERENT STUDY AREAS</h1><br/>
						<p>There are many different study areas you can choose from that will set you in the 
						ight path to pursue a career in the creative industries. To make this process easier 
						for you, Mozaik Play has categorised these options into 9 Study Areas. Click below 
						the different options and discover additional disciplines and potential career outcomes 
						under each study area category.</p>
					</div>
				</div>
				<div className="selected-study-areas">
					<div className="selected-area-boxes">
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287645/study-areas/pexels-photo-433617.jpg" alt="Digital Media" />
	    						<a href="/study-area/digital-media" className="btn btn-default">Digital Media</a>
						</div>
						<div className="selected-area card">
	  							<img  src="https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287309/study-areas/aleks-dorohovich-26-unsplash.jpg" alt="Visual Communication" />
	    						<a href="/study-area/visual-communication" className="btn btn-default">Visual Communication</a>
						</div>
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287447/study-areas/pexels-photo-262034.jpg" alt="Fine Arts" />
	    						<a href="/study-area/fine-arts" className="btn btn-default">Fine Arts</a>
						</div>
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287352/study-areas/chris-murray-563843-unsplash.jpg" alt="FILM/TV/AUDIO" />
	    						<a href="/study-area/film-tv-audio" className="btn btn-default">FILM/TV/AUDIO</a>
						</div>
					</div>
					<div className="selected-area-boxes">
						<div className="selected-area card">
	  							<img  src="https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522806278/study-areas/pexels-photo-415307.jpg" alt="Performing Arts" />
	    						<a href="/study-area/performing-arts" className="btn btn-default">Performing Arts</a>
						</div>
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287247/study-areas/abstract-art-artistic-226589.jpg" alt="Design"/>
	    						<a href="/study-area/design" className="btn btn-default">Design</a>
						</div>
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287581/study-areas/pexels-photo-298298.jpg" alt="Photography" />
	    						<a href="/study-area/photography" className="btn btn-default">Photography</a>
						</div>
						<div className="selected-area card">
	  							<img  src="http://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287362/study-areas/steve-driscoll-106346-unsplash.jpg" alt="Built Environment" />
	    						<a href="/study-area/built-environment" className="btn btn-default">Built Environment</a>
						</div>						
						<div className="selected-area card">
	  							<img  src="https://res.cloudinary.com/mozaik/image/upload/c_fill,g_auto,h_400,q_auto:low,w_400/v1522287677/study-areas/pexels-photo-669615.jpg" alt="Business for Creatives" />
	    						<a href="/study-area/business-for-creatives" className="btn btn-default">Business for Creatives</a>
						</div>						
					</div>
				</div>
			</div>
			<div>
			 	<Footer/>
			</div>
		</div>
			
        	      
		);
	}
}