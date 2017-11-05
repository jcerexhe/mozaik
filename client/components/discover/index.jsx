import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Slider from 'rc-slider';
import _ from 'lodash';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const handleStyle = {
  backgroundColor: '#000000',
  border: 'none',
  borderRadius: 0,
  transform: 'rotate(45deg)',
  width: '11px',
  height: '11px'
};
const trackStyle = {
  backgroundColor: '#000000',
  height: '1px'
};
const railStyle = {
  height: '1px'
};
const dotStyle = {
  bottom: '0px',
  width: '7px',
  height: '7px'
};

const Map = withGoogleMap(props => (
  <GoogleMap
    zoom={2}
    center={ { lat: 0.0, lng: 150.0 } }
  >
    <Marker
      position={ props.coords }
      clickable={ true }
    />
  </GoogleMap>
));

export default class DiscoverApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificate: false,
      diploma: false,
      advancedDiploma: false,
      bachelor: false,
      graduateCertificate: false,
      graduateDiploma: false,
      master: false,
      phd: false,
      priceRange: [0, 200000],
      city: '',
      state: '',
      country: ''
    };
  }

  updateSearchParam(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    const { priceRange, university, state, country } = this.state;
    const quals = ['certificate', 'diploma', 'advanced diploma', 'bachelor', 'graduate certificate', 'graduate diploma', 'master', 'phd'];
    const inputs = ['city', 'state', 'country'];
    return (
      <div>
        <Map
          coords={ {lat: -33.8688, lng: 151.2093} }
          containerElement={
            <div style={{ height: 'calc(100vh - 100px)', width: '100vw' }} />
          }
          mapElement={
            <div style={{ height: 'calc(100vh - 100px)', width: '100vw' }} />
          }
        />
        <div className='discover-column-container'>
          <div className='discover-column'>
            <h3>qualification</h3>
            <div className='discover-checkboxes control-group'>
              { _.map(quals, (q, i) => {
                return (
                  <label className='control control--checkbox' key={ i }>
                    <input
                      name={ q }
                      type="checkbox"
                      checked={ this.state[q] }
                      onChange={ () => this.updateSearchParam(q, !this.state[q]) } />
                    <div className='control__indicator' />
                    { q }
                  </label>
                );
              }) }
            </div>
            <h3>Price Range <span>(aud)</span></h3>
            <Range
              defaultValue={ [0, 200000] }
              min={ 0 }
              max={ 200000 }
              value={ priceRange }
              allowCross={ false }
              onChange={ (val) => this.updateSearchParam('priceRange', val) }
              handleStyle={[handleStyle, handleStyle]}
              trackStyle={[trackStyle]}
              railStyle={ railStyle }
              dotStyle={ dotStyle }
              marks={ { 0: <strong>$0</strong>, 200000: <strong>$200,000+</strong> } }
            />
            <h3>location</h3>
            { _.map(inputs, (inp) => {
              return (
                <input
                  type='text'
                  placeholder={ inp }
                  val={ this.state[inp] }
                  onChange={ (val) => this.updateSearchParam(inp, val.target.value) }
                />
              );
            }) }
            <center>
              <a href="#" className="btn btn-discover">Submit</a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
