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
				<h1 className="study-area-page-heading">{studyarea.title}</h1>
				<div className='study-area-disciplines'>
					<p>
					<a className='study-link' href="#">{studyarea.disciplines1}</a><br/>
					<a className='study-link' href="#">{studyarea.disciplines2}</a>
					</p>
				</div>
				<div className='study-area-heading-description'>
					<p>" { studyarea.description } "</p>
				</div>
				<div className='study-area-background'>
					<img className="header-colored" src={ studyarea.image } />
					{/*<img className="header-original" src="https://res.cloudinary.com/mozaik/image/upload/v1522806278/study-areas/pexels-photo-415307.jpg" />*/}	
				</div>
			</div>
			<div className='careers-container'>
  				<h1>CAREERS</h1>
  				<div className='careers'>
	  				<ul className='careers-lists'>
	  					<a className='careers-link' href="#">{studyarea.keywords1}</a><br/><br/><br/>
	  					<a className='careers-link' href="#">{studyarea.keywords2}</a>
					</ul>

				</div>
				<div className='study-area-alumni'>
					<div className='study-area-alumni-qoute'>
						<p>"{studyarea.alumni_qoute1}<br/>{studyarea.alumni_qoute2}"</p>
					</div>
					
					<div className='study-area-alumni-content'>
						<div className='study-area-alumni-image'>
							<img className="header-colored" src={studyarea.alumni_photo}/>
						</div>
						<div className="study-area-alumni-details">
							<p className="study-area-alumni-name">{studyarea.alumni_name}</p>
							<p className="study-area-alumni-degree">{studyarea.alumni_degree}</p><br/>
							<p className="study-area-alumni-description">{studyarea.alumni_description}</p>
						</div>	
					</div>
				</div>
				<div className='study-area-enquire-img' >
					<img src="/images/buttons/Enquire.png" />
				</div>
			</div>
			<div className='study-area-footer'>
				<Footer/>
			</div>
	</div>
        	      
		);
	}
}