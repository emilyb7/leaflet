import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, } from 'react-leaflet';
import Leaflet from 'leaflet';

import './App.css';
import './leaflet.css'

class App extends Component {
  render() {

    const position = [51.505, -0.09];

    const icon = Leaflet.icon({
      iconUrl: 'http://www.iconsdb.com/icons/preview/soylent-red/map-marker-2-xxl.png',
      iconSize: [38, 40],
    });

    return (
      <div className="App">
        <h1>Leaflet with React</h1>
          <Map center={position} zoom={13}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <Marker position={position} icon={icon}>
              <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
      </div>
    );
  }
}

export default App;
