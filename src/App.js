import React from "react";
import {useState} from 'react';
import Weather from "./components/Weather";

const App = () => {

  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState();

  const API_KEY = "d13e312e74a2fe3485762067e1129756";
  const API_URL =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
  
  return (
  <div> 
    <div>
      <h1>M47 Weather App</h1>
      <p>Hello world</p>
      <p>Enter a City to search for the Weather</p>
    </div>
    
    <div className="App">
      <Weather/>

    </div>



  </div> 
  );
};

export default App;
