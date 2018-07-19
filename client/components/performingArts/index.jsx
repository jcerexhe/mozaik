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

			//title.replace("","/")
		    //if title = Film TV Audio	
			   
		}

		let studyAreaTitle = studyarea.title;

    	if (studyAreaTitle == "Film TV Audio") {
      	studyAreaTitle = studyAreaTitle.replace(/\s/g, "/");
	   	}

		return (
		<div>
			{/*Desktop View*/}
			<div className="desktop-view d-none d-lg-block">
				<div>
					<h1 className="study-area-page-heading">{studyAreaTitle}</h1>
					<div className='study-area-disciplines'>
						<p>
						<a className='study-link' href="#">{studyarea.disciplines1}</a><br/>
						<a className='study-link' href="#">{studyarea.disciplines2}</a><br/>
						<a className='study-link' href="#">{studyarea.disciplines3}</a>
						</p>
					</div>
					<div className='study-area-heading-description'>
						<p>" { studyarea.description } "</p>
					</div>
					<img className="study-area-background" src={ studyarea.image } />
				</div>
				<div className='careers-container'>
	  				<h1>CAREERS</h1>
	  				<div className='careers'>
		  				<ul className='careers-lists'>
		  					<a className='careers-link' href="#">{studyarea.keywords1}</a>
		  					<a className='careers-link' href="#">{studyarea.keywords2}</a>
						</ul>
					</div>
					{/*<div className='study-area-alumni'>
						<div className='study-area-alumni-qoute'>
							<p>"{studyarea.alumni_qoute1}<br/>{studyarea.alumni_qoute2}"</p>
						</div>

						<div className='study-area-alumni-content'>
							<div className='study-area-alumni-image'>
								<img className="header-colored" src="{studyarea.alumni_photo}" />
							</div>
							<div className="study-area-alumni-details">
								<p className="study-area-alumni-name">{studyarea.alumni_name}</p>
								<p className="study-area-alumni-degree">{studyarea.alumni_degree}</p><br/>
								<p className="study-area-alumni-description">{studyarea.alumni_description}</p>
							</div>	
						</div>
					</div>*/}
					<div className='study-area-enquire-img' >
						<img src="/images/buttons/Enquire.png" />
					</div>	
				</div>
				<div className='study-area-footer'>
					<Footer/>
				</div>
			</div>
		{/*Mobile View*/}
			<div className="mobile-view d-lg-none">
				<section>
					<img className="mobile-study-area-background" src={ studyarea.image } />
					<h1 className="mobile-study-area-title">{studyAreaTitle}</h1>
				</section>
				<section className="careers-container">
				</section>
			</div>
		</div>
        	      
		);
	}
}