import React, { Component } from 'react';
import _ from 'lodash';

export default class MobileAgency extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<h1 className="mobile-agency-header">You make the decision<br/>We help you with the rest</h1>
					<h1 className="mobile-agency-subheader">We are here to help you</h1>
					<p className="mobile-agency-subheader-desc">So you have decided to pursue a creative career - way to go! Our goal is to connect<br/>
					the right student to the right creative school. Choosing what to study and where to<br/>
					study is one of the most important<br/>
					decisions you will make in your life journey... it is also not an easy decision,it can be<br/>
					daunting, confusing, and scary.<br/>
					Mozaik can help you join the dots between choosing the right courses all the way<br/>
					up until finding that dream job.<br/>
					Our personalized advice and honest counselling services is free of charge to stu-<br/>
					dents.We are funded by reputable creative schools from around the globe. Our<br/>
					Mozaik team are here to help you step by step throughout the<br/>
					application process. The team can assist you with selecting the right course, filling<br/>
					out the application form, submitting visa and insurance documentations, book<br/>
					travel<br/>
					arrangements, help you find accommodation and make your first day less daunting<br/>
					by providing an arrival welcome pack.
					</p>
					<div className="row mobile-timeline-agency">
						<div className="col-md-4 m-timeline-img">
							<img src='/images/elements/timeline.png' />
						</div>
						<div className="col-md-8 m-timeline-icons">
							<a href="#discover" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Discover</p>
								</div>
							</a>
								<div className="agency-icon selection">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Selection of Course and School</p>
								</div>
								<div className="agency-icon application">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Applicationl</p>
								</div>
								<div className="agency-icon creative">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Creative Portfolio Preparation</p>
								</div>
								<div className="agency-icon visa">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Visa Submissio and Medical Insurance</p>
								</div>
								<div className="agency-icon travel">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Travel Arrangements</p>
								</div>
								<div className="agency-icon accomodation">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Accomodation and Arrangements</p>
								</div>
								<div className="agency-icon departure">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Pre and Post Departure Support</p>
								</div>
								<div className="agency-icon study-period">
									<img className="agency-icon-img" src="https://res.cloudinary.com/mozaik/image/upload/v1510200548/Mozaik_logo_pink_z9yl2v.png" />
									<p className="agency-icon-label">Support throughout your study period</p>
								</div>
						</div>
					</div>
					{/*<!-- Modal agency icon -->*/}
					<div className="agency-modal">
						<div className="modal modal-size" id="discover" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Discover</h1>
						        <p>Explore amazing creative student work from our showcase gallery or watch one of our MasterClass videos and see what it means to be a creative professional in the creative industry.</p>
								<p>Discover here.</p>
						      </div>
						    </div>
						  </div>
						</div>
					</div>
				</div>
			</div>   
		);
	}
}