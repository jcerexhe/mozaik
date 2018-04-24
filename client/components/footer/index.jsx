import React, { Component } from 'react';
import _ from 'lodash';


export default class FooterApp extends Component {
	render() {
		return (
		<div>
			<div className='inside-btns'>
				<img className='inside-scoop-img' src="/images/buttons/Get-the-inside-scoop.png" />
				<input placeholder="Email" className='input-email' />
				<img className='inside-scoop-img' src="/images/buttons/subscribe.png" />
			</div>
			<div className='partoffooter'>
				<img src='/images/patterns/partoffooter.png' />
			</div>
		</div>	      
		);
	}
}
