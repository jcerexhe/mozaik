import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(props => (
  <GoogleMap
    zoom={2}
    center={ props.coords }
  >
    <Marker position={ props.coords } />
  </GoogleMap>
));

export default class DiscoverApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Map
        coords={ {lat: -33.8688, lng: 151.2093} }
        containerElement={
          <div style={{ height: '100vh', width: '100vw' }} />
        }
        mapElement={
          <div style={{ height: '100vh', width: '100vw' }} />
        }
      />
    );
  }
}
