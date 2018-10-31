import React, {Component} from 'react';

class EarthquakesData extends Component{
  constructor(props) {
    super(props);
    console.log(this.props, ' the props');
  }
  render(){
    const quakesList = this.props.earthquakes.map((earthquakes, i) =>{
      return (
        <div key={i}>
        <li>Place: {earthquakes.properties.place} </li>
        <li>Types: {earthquakes.properties.types} </li><br/><br/>

        </div>
      )
    })
    return(
      <div>
        {quakesList}
      </div>
    )
  }
}
export default EarthquakesData;
