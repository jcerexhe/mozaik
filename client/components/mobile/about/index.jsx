import React, { Component } from 'react';
import _ from 'lodash';
import HubspotForm from 'react-hubspot-form';

export default class MobileAbout extends Component {
	render() {
		return (
			<div>
				<img className="mobile-about-us-image" src="https://res.cloudinary.com/mozaik/image/upload/s--Y563z3-J--/v1532404685/crop_guitar_splitshire_eth5es.jpg" />
				<div className="m-about-page-heading">
					<h1>Hello there!</h1>
					<p>WE LOVE CREATIVITY.</p>
					<p>WE EMBRACE SOCIAL.</p>
					<p>WE ARE ANALYTICAL. WE ARE MOBILE.</p>
					<p>WE ARE GLOBAL.</p>
					<p>WE CONNECT TALENT TO CREATIVE SCHOOL.</p>
					<p>WE ARE MOZAIK PLAY.</p>
					<hr className="m-horizontal-line"/><br/><br/>
					<p className="m-about-desc">We love creativity. We embrace social. We are analytical. We are mobile.<br/>
						We are global. We connect talent to creative school. We are Mozaik Play.
					</p>
				</div>
				<div className="m-about-us-text-footer">
					<p>WE'D LOVE TO HEAR FROM YOU</p>
					<hr className="m-horizontal-line-form" />
					<HubspotForm
						css=''
						portalId= '2708822'
						formId= '9452cc7e-8460-4b34-83c3-ea9e23622b86'
 					/>
				</div>
			</div>
		);
	}
}	