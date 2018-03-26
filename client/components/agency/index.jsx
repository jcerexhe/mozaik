import React, { Component } from 'react';
import _ from 'lodash';

export default class AgencyApp extends Component {
	render() {
		return (
		<div>
			<div className='agency-heading'>
				<div className='agency-info'>
					<h1 className='hidden-line'>Using text to Hidden Line </h1>
					<p className='agency-title'>You make the decision<br/>We help you with the rest</p>
				</div>
			</div>
			<div className="display-agency">
				<div className='agency-image'>
				</div>
				<div className='agency-container'>
					<div className='agency-text'>
						<h1>WE ARE HERE TO HELP YOU</h1>
						<p>So you have decided to pursue a creative career - way to go! Our goal is to connect the right student<br/>
						to the right creative school. Choosing what to study and where to study is one of the most<br/>
						important decisions you will make in your life journey... it is also not an easy decision,<br/>
						it can be daunting, confusing, and scary.<br/>
						Mozaik can help you join the dots between choosing the right courses all the way up until finding that dream job.<br/>
						Our personalized advice and honest counselling services is free of charge to students.<br/>
						We are funded by reputable creative schools from around the globe.</p>
						<p>Our Mozaik team are here to help you step by step throughout the application process. The team can assist you with selecting the right course, filling out the application form,<br/>
						submitting visa and insurance documentations, book travel arrangements, help you find accommodation and make your first day less daunting<br/>
						by providing an arrival welcome pack.
						</p>
						<div className='start-text'>
							<p>YOUR STUDY JOURNEY STARTS HERE</p>
						</div>
					</div>
				</div>
				<div className="agency-infographics-container">
					<div className='rectangle'>
					
					</div>
					<div className='agency-timeline'>
						<img src="images/elements/timeline.png" />
					</div>

				</div>
			<div className='agency-contact'>
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
	</div>
        	      
		);
	}
}