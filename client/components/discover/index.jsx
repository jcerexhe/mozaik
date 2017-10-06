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
      'advanced diploma': false,
      masters: false,
      diploma: false,
      bachelor: false,
      phd: false,
      priceRange: [0, 100],
      university: '',
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
    const quals = ['certificate', 'advanced diploma', 'masters', 'diploma', 'bachelor', 'phd'];
    const inputs = ['university', 'state', 'country'];
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
            <a href='/'><h2>mozaik</h2></a>
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
            <h3>Price Range <span>(in aud$)</span></h3>
            <Range
              defaultValue={ [0, 100] }
              min={ 0 }
              max={ 100 }
              value={ priceRange }
              allowCross={ false }
              onChange={ (val) => this.updateSearchParam('priceRange', val) }
              handleStyle={[handleStyle, handleStyle]}
              trackStyle={[trackStyle]}
              railStyle={ railStyle }
              dotStyle={ dotStyle }
              marks={ { 0: <strong>$0</strong>, 100: <strong>$100</strong> } }
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
          </div>
        </div>
      </div>
    );
  }
}
