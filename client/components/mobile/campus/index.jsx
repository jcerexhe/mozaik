import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import _ from 'lodash';

const Map = withGoogleMap(props => (
  <GoogleMap
    zoom={15}
    center={ props.coords }
  >
    <Marker position={ props.coords } />
  </GoogleMap>
));
export default class MobileCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: props.campuses,
      activeCampus: props.campuses[0]
    };
  }

  setCampus(activeCampus) {
    this.setState({ activeCampus });
  }

  render() {
    const { campuses, activeCampus } = this.state;
    return (
      <div className="campus-mobile">
          <div className='campus-container'>
            {
            // <div className='campus-buttons'>
            //   { _.map(campuses, (campus) => {
            //     return (
            //       <a className={ 'campus' + (activeCampus == campus ? ' active' : '') } onClick={ () => this.setCampus(campus) }>
            //         { campus.campus }
            //       </a>
            //     );
            //   }) }
            // </div>

          }
            <Map
              coords={ activeCampus.coordinates }
              containerElement={
                <div style={{ height: '60vh' }} />
              }
              mapElement={
                <div style={{ height: '60vh' }} />
              }
            />
          </div>
      </div>
    );
  }
}

