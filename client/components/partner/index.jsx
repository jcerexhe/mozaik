import React, { Component } from 'react';
import _ from 'lodash';

export default class PartnerApp extends Component {
	render() {
		return (
		<div>
			<h1 className="partner-page-heading">Partnering<br/>with mozaik play</h1>
			<div className="display-partner">
				<div className='partner-image'>
				</div>
				<div className='scroll-down'>
					<img src="/images/buttons/Scroll-Down.png" />
				</div>
				<div className='partner-large-container'>
					<p>Mozaik Plays regularly partners with quality creative-institutions across the globe that offer undergraduate<br/>
					and graduate degrees in study areas such as digital media, film & TV, visual communications, design,<br/>
					performing arts, fine arts, photography, built environment and business for creatives.</p>
					<p>
					<img src="/images/elements/Small-pink-line-agency-page.png" />
					</p>
					<p><b>WE CAN SUPPORT YOUR INSTITUTION BY:</b></p>
				</div>
				<div className='partner-small-container'>
					<div className='square'>
						<p>Providing a global platform<br/>for schools to list their<br/>courses, facilities and showcase<br/>student work projects</p>
					</div>
					<div className='square'>
						<p>Provide creative schools<br/>the resources to reach,<br/>market, interact and recruit<br/>the right student to the<br/>right course</p>
					</div>
					<div className='square'>
						<p>Support schools with their<br/>recruitment strategy,<br/>media production,and<br/>digital marketing needs</p>
					</div>
				</div>
				<div className='partner-middle-paragraph'>
					<p> If you are in the creative industries space preparing future graduates for a successful<br/>
					creative career, we are eager to hear from your institution.<br/>
					We would love to help you make those connections with talented students.</p>
				</div>

				<div className='partner-contact-form'>
					<div>
						<p className='contact-heading'>PLEASE KINDLY CONTACT US IF YOU ARE INTERESTED IN PARTNERING</p>
					</div>
					<div className='contact-field'>
						<p>FIRST NAME</p>
						<input />
					</div>
					<div className='contact-field'>
						<p>LAST NAME</p>
						<input />
					</div>
					<div className='contact-field'>
						<p>SCHOOL</p>
						<input />
					</div>
					<div className='contact-field'>
						<p>EMAIL ADDRESS</p>
						<input />
					</div>
					<div className='contact-field-message'>
						<p>MESSAGE</p>
						<input />
					</div><br/>
					<div className='submit-button'>
						<img alt='submit button' src='/images/buttons/Submit_1.png'/>
					</div>
				</div>
			</div>
			<div className='partner-contact'>
				<div className='partner-inside-scoop'>
					<img className='partner-inside-scoop-img' src='/images/buttons/Get-the-inside-scoop.png' /><br/>
					<input className='partner-email' placeholder="Email" />
					<br/>
					<img className='partner-subscribe-img' src='/images/buttons/subscribe.png' />
				</div>
			</div>
		</div>
		);
	}
}