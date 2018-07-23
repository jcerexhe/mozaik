import React, { Component } from 'react';
import _ from 'lodash';


export default class FooterApp extends Component {
	render() {
		return (
		<div>
			<div className="d-none d-lg-block">
				<div className='inside-btns'>
					<img className='inside-scoop-img' src="/images/buttons/Get-the-inside-scoop.png" />
					<input placeholder="Email" className='input-email' />
					<img className='inside-scoop-img' src="/images/buttons/subscribe.png" />
				</div>
				<div className='partoffooter'>
					<img src='/images/patterns/partoffooter.png' />
				</div>
			</div>
			<div className="d-lg-none">
				<div className='inside-btns'>
					{/*<img className='inside-scoop-img' src="/images/buttons/Get-the-inside-scoop.png" /*/}>
					<h1 className='inside-scoop-text'>Get the inside Scoop</h1>
					<input placeholder="Email" className='input-email' />
					{/*<img className='inside-scoop-img' src="/images/buttons/subscribe.png" />*/}
					<button className="button-subscribe-footer"><h1>Subscribe</h1></button>
				</div>
			</div>
		</div>	      
		);
	}
}
