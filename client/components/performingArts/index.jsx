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
		{/*Mobile View*/}head
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