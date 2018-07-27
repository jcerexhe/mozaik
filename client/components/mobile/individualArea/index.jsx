import React, { Component } from 'react';
import _ from 'lodash';

export default class MobileIndividualStudyArea extends Component {

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
					<h1 className="mobile-study-area-page-heading">{studyAreaTitle}</h1>
					<img className="mobile-study-area-background" src={ studyarea.image } />
				</div>
				<div className="mobile-careers-container">
					<p className="mobile-sa-description">" { studyarea.description } "</p>
					<button className="mobile-enquire-button"><p>ENQUIRE</p></button>
					<div className="mobile-career-list">
						<h1>CAREERS</h1>
						<p>{studyarea.keywords1}{studyarea.keywords2}</p>
					</div>
				</div>
			</div>
		);
	}
}