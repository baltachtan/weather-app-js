import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303"},
  { name: "Pittsburgh", zip: "15213"},
  { name: "Chicago", zip: "60607"},
  { name: "Honolulu", zip: "96803"}
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <WeatherDisplay zip = {"12345"} />
       {PLACES.map((place, index) => (
         <button
         key={index}
         onClick={() => {
           console.log('Clicked index '+index);
         }}
         >
         {place.name}
         </button>
       ))}
      </div>
    );
  }
}

class WeatherDisplay extends Component {
  render() {
    return ( 
      <h1>Displaying weather for city {this.props.zip}</h1>
    )
  }
}

export default App;
