import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';
import HubspotForm from 'react-hubspot-form';

export default class AboutApp extends Component {
	render() {
		return (
		<div>
			<h1 className="about-page-heading">About Us</h1>
			<div className="display-about-us">
				<div className='about-image'>
				</div>
				<div className='scroll-down'>
					<img src="/images/buttons/Scroll-Down.png" />
				</div>
				<div className='about-us-container'>
					<div className='about-us-text'>
						<p>We love creativity. We embrace social. We are analytical. We are mobile.<br/>
						We are global. We connect talent to creative school. We are Mozaik Play.</p>
						<p>
						<img src="/images/elements/Small-pink-line-agency-page.png" />
						</p>
						<p>Our head office is based in Sydney,Australia. Our team, however, is a global team who are all experts<br/>
						in International education and are passionate about inspiring a generation of students to pursue a career<br/>
						in the creative industries.<br/>
						Mozaik Play includes an Advisory Board-a group of industry experts who counsel us on how to best set<br/>
						the strategic direction of the organisation.</p>
					</div>
					<div className="about-us-text-footer">
						<p>Say Hello</p>
						<img src="/images/buttons/Contact-us.png" />
						<HubspotForm
							css=''
							portalId= '2708822'
							formId= '9452cc7e-8460-4b34-83c3-ea9e23622b86'
   						/>

					</div>
				</div>
				<div>
					<Footer/>
				</div>
			</div>
			
		</div>
        	      
		);
	}
}