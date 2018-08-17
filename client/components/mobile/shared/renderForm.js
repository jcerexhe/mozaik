import React, { Component } from 'react';
import HubspotForm from 'react-hubspot-form';

export default class RenderForm extends Component {
  constructor(props) {
    super(props);
	}

	render(){

		return(
		    <div>
		      <HubspotForm
		          portalId={this.props.portalId}
		          formId={this.props.formId}
		      />
		    </div>
	    )
	}
}

