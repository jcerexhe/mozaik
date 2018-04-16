import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';

export default class StudyAreaApp extends Component {

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
				<h1 className="performing-arts-page-heading">{studyarea.title}</h1>
				<div className='performing-arts-study-disciplines'>
					<p>
					<a className='study-link' href="#">{studyarea.disciplines1}</a><br/>
					<a className='study-link' href="#">{studyarea.disciplines2}</a>
					</p>
				</div>
				<div className='performing-arts-heading-description'>
					<p>" { studyarea.description } "</p>
				</div>
				<div className='performing-arts-background'>
					<img className="header-colored" src={ studyarea.image } />
					{/*<img className="header-original" src="https://res.cloudinary.com/mozaik/image/upload/v1522806278/study-areas/pexels-photo-415307.jpg" />*/}	
				</div>
			</div>
			<div className='careers-container'>
  				<h1>CAREERS</h1>
  				<div className='careers'>
	  				<ul className='careers-lists'>
	  					<a className='careers-link' href="#">{studyarea.keywords1}</a><br/>
	  					<a className='careers-link' href="#">{studyarea.keywords2}</a>
					</ul>

				</div>
				<div className='performing-art-alumni'>
					<div className='performing-art-alumni-qoute'>
						<p>"{studyarea.alumni_qoute}"</p>
					</div>
					
					<div className='performing-art-alumni-content'>
						<div className='performing-art-alumni-image'>
							{studyarea.alumni_photo}
						</div>
						<div className="performing-art-alumni-details">
							<p className='performing-art-alumni-name'>{studyarea.alumni_name}</p>
							<p className="performing-art-alumni-degree">{studyarea.alumni_degree}</p><br/>
							<p className="performing-art-alumni-description">{studyarea.alumni_description}</p>
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