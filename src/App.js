import React, { Component } from 'react';
import Earthquakes from './EarthquakesData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: [],
    }
  }
  getEarthquakes = async () =>{
    try {
      const earthquakesApi = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const earthquakesJson = await earthquakesApi.json();
      this.state.earthquakes.push(earthquakesJson.features);
      console.log(this.state.earthquakes, ' this is the earthquackesData');

      return earthquakesJson;
    } catch (err) {
      return err;
    }
  }

  componentDidMount(){
    this.getEarthquakes().then((earthquakes) =>{
      this.setState({earthquakes: earthquakes.features});
    }).catch((err) =>{
      console.log(err, ' this is the error');
    })
  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Earthquakes earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
