import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';
import HubspotForm from 'react-hubspot-form';

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
					<p>Mozaik Play regularly partners with quality creative-institutions across the globe that offer undergraduate<br/>
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
		  			<HubspotForm
		  			  css=''
		              portalId='2708822'
		              formId='a5525c57-c51b-4b7f-818f-9461f0900087'
		          />				
				</div>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
		);
	}
}