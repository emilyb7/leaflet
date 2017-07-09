import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, } from 'react-leaflet';
import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import './App.css';
import './leaflet.css'

class App extends Component {
  render() {

    const position = [51.505, -0.09];

    const icon = Leaflet.icon({
      iconUrl: 'http://www.iconsdb.com/icons/preview/soylent-red/map-marker-2-xxl.png',
      iconSize: [38, 40],
    });

    const coords = [
      [51.5295318, -0.0444836],
      [51.5294086, -0.0444392],
    ];

    const markers = coords.map(point => <Marker position={point} icon={icon} />)

    return (
      <div className="App">
        <h1>Leaflet with React</h1>
        <Map center={position} zoom={13} maxZoom={18}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <MarkerClusterGroup>
            { markers }
          </MarkerClusterGroup>
        </Map>
      </div>
    );
  }
}

export default App;
