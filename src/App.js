import React, { Component } from 'react';
import EarthquakesData from './EarthquakesData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquackes: [],
    }
  }

  getEarthquackesData = async () =>{
    try {
      const earthquackes = await fetch('');

      const earthquackesJson = await earthquackes.json();
      return earthquackesJson;
    } catch (err) {
      return err;
    }
  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <div id="info">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
