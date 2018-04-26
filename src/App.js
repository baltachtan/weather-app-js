import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const PLACES = [
  { name: "Palo Alto", zip: "94303"},
  { name: "Pittsburgh", zip: "15106"},
  { name: "Chicago", zip: "60607"},
  { name: "Honolulu", zip: "96803"}
];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
       
       {PLACES.map((place, index) => (
         <button
         key={index}
         onClick={() => {
           this.setState({ activePlace: index });
         }}
         >
         {place.name}
         </button>
       ))}
       <WeatherDisplay
       key={activePlace}
       name={PLACES[activePlace].name}
       />
      </div>
    );
  }
}

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    }
  }
  componentDidMount() {
    const name = this.props.name;
    
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
    name +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({weatherData: json});
    })
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>
    const weather = weatherData.weather[0];
    const iconURL = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconURL} alt = {weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°F</p>
        <p>High: {weatherData.main.temp_max}°F</p>
        <p>Low: {weatherData.main.temp_min}°F</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    )
    return <div>{JSON.stringify}</div>
  }
}

export default App;
