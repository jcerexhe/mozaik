import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import _ from 'lodash';

import '!style-loader!css-loader!rc-slider/assets/index.css';
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const Map = withGoogleMap(props => (
  <GoogleMap
    zoom={2}
    center={ { lat: 0.0, lng: 150.0 } }
  >

    {_.map(props.coords, (coord, index) => {
      return (
        <Marker
          key = { 'marker-' + index }
          position={ coord }
          clickable={ true }
        />
      )
    })}

  </GoogleMap>
));

export default class DiscoverApp extends Component {
  constructor(props) {
    super(props);
    const allLocInfo = _.map(props.schoolsInfo, (schoolInfo) => {
      return {
        schoolName: schoolInfo.name,
        locDes: schoolInfo.locationDescription,
        locations: schoolInfo.locations
      }
    });

   this.state = {
      allLocInfo,
      foundation: false,
      certificate: false,
      diploma: false,
      advancedDiploma: false,
      bachelor: false,
      graduateCertificate: false,
      graduateDiploma: false,
      master: false,
      phd: false,
      priceRange: [0, 200000],
      onCampus: false,
      online: false,
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
    const quals = ['foundation','certificate', 'diploma', 'advanced diploma', 'bachelor', 'graduate certificate', 'graduate diploma', 'master', 'phd'];
    const site = ['on campus', 'online'];
    const inputs = ['city', 'state', 'country'];
    let coords = [];
    _.forEach(this.state.allLocInfo,
      (locInfo) => {
        _.forEach(locInfo.locations,
          (locCoord) => {
            coords.push(locCoord.coordinates)
          })
      });
    return (
      <div className="map">
        <Map
         //coords={ {lat: -33.8688, lng: 151.2093} }
         coords={ coords }
          containerElement={
            <div style={{ height: 'calc(140vh - 140px)', width: '100vw' }} />
          }
          mapElement={
            <div style={{ height: 'calc(140vh - 140px)', width: '100vw' }} />
          }
        />
        <div className='discover-column-container'>
          <div className='discover-column'>
            <h3>QUALIFICATION</h3>
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
            <h3>PRICE RANGE <span>(AUD)</span></h3>
            <Range
              defaultValue={ [0, 200000] }
              min={ 0 }
              max={ 200000 }
              value={ priceRange }
              allowCross={ false }
              onChange={ (val) => this.updateSearchParam('priceRange', val) }
              marks={ { 0: <strong>$0</strong>, 200000: <strong>$200,000+</strong> } }
            />

            <div id='sites' className='discover-checkboxes control-group'>
              { _.map(site, (s, i) => {
                return (
                  <label className='control control--checkbox' key={ i }>
                    <input
                      name={ s }
                      type="checkbox"
                      checked={ this.state[s] }
                      onChange={ () => this.updateSearchParam(s, !this.state[s]) } />
                    <div className='control__indicator' />
                    { s }
                  </label>
                );
              }) }
            </div>

            <h3>LOCATION</h3>
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