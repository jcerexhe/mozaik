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
									<img className="agency-icon-img" src="/images/agency-icons/discover1.png" />
									<p className="agency-icon-label">Discover</p>
								</div>
							</a>
							<a href="#selection" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/selection2.png" />
									<p className="agency-icon-label">Selection of Course and School</p>
								</div>
							</a>
							<a href="#application" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/application3.png" />
									<p className="agency-icon-label">Application</p>
								</div>
							</a>
							<a href="#creative" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/creative4.png" />
									<p className="agency-icon-label">Creative Portfolio Preparation</p>
								</div>
							</a>
							<a href="#visa" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/visa5.png" />
									<p className="agency-icon-label">Visa Submission and Medical Insurance</p>
								</div>
							</a>
							<a href="#travel" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/travel6.png" />
									<p className="agency-icon-label">Travel Arrangements</p>
								</div>
							</a>
							<a href="#accomodation" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/accomodation7.png" />
									<p className="agency-icon-label">Accomodation and Arrangements</p>
								</div>
							</a>
							<a href="#departure" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/support8.png" />
									<p className="agency-icon-label">Pre and Post Departure Support</p>
								</div>
							</a>
							<a href="#study-period" data-toggle="modal">
								<div className="agency-icon">
									<img className="agency-icon-img" src="/images/agency-icons/study_period9.png" />
									<p className="agency-icon-label">Support throughout your study period</p>
								</div>
							</a>
						</div>
					</div>
					{/*<!-- Modal agency icon -->*/}
					<div className="agency-modal">
						{/*discover modal*/}
						<div className="modal" id="discover" tabindex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
						{/*selection modal*/}
						<div className="modal" id="selection" tabindex="2" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Selection of Course and School</h1>
						        <p>Personalised Study Plan</p>
						        <p>We understand that many factors influence your course selection: school reputation, fees, graduate outcomes, etc. Our team can assist you with this selection-the aim at this stage is to develop a personalized study plan.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Application*/}
						<div className="modal" id="application" tabindex="3" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Application</h1>
						        <p>Applying to a school requires attention to detail. We help with compiling and submiting all relevant documentation required by each school(these may vary between schools). If English is not your first language then we will "package" an English course with your main course so that you meet the language entry requirements. You can then apply for a visa that covers the full length of yout study period.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Creative Portfolio Preparation*/}
						<div className="modal" id="creative" tabindex="4" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Creative Portfolio Preparation</h1>
						        <p>Imagine if you were able to showcase your creative work on self-promo site. We can assist you with setting up this site and/or prepare a creative portfolio that you can the use as part of your application.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Visa Submission and Medical Insurance*/}
						<div className="modal" id="visa" tabindex="5" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Visa Submission and Medical Insurance</h1>
						        <p>Each destination country(where you will study)has a different set of visa rules. We provide full Visa documentation support, including assisting with any certification, and translations service required. We also assist with medical insurance application process. We also have partnered with Migration Agencies for those seeking to explore post study migration options.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Travel Arrangements*/}
						<div className="modal" id="travel" tabindex="6" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Travel Arrangements</h1>
						        <p>Do you require flight or any other travel arrangements?</p>
								<p>No problem, through our network of partnerships we can offer the most reliable and cost effective travel options for you.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Accomodation and Arrangements*/}
						<div className="modal" id="accomodation" tabindex="6" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Accomodation and Arrangements</h1>
						        <p>Would you like to live on campus, or share a private accomodation with other students?</p>
						        <p>Maybe you prefer homestay where you ca live with a local family for the first few months of your stay.</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Pre and Post Departure Support*/}
						<div className="modal" id="departure" tabindex="6" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Pre and Post Departure Support</h1>
						        <p>We have a developed a pre-departure pack that includes important information and tips on culture and social norms, emergency contacts, key events, locations of interest, etc. We also arrange to have somebosy welcome you when you arrive at the airport(optional).</p>
						      </div>
						    </div>
						  </div>
						</div>
						{/*Support throughout your study period*/}
						<div className="modal" id="study-period" tabindex="7" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-header">
						        {/*<h5 className="modal-title" id="exampleModalLongTitle">Close</h5>*/}
						        <button type="button" className="agency-close" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">Close&times;</span>
						        </button>
						      </div>
						      <div className="modal-body">
						      	<h1>Support throughout your study period</h1>
						        <p>...</p>
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