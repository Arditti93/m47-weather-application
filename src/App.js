import React from "react";
import {useState} from 'react';
import Weather from "./components/Weather";

const App = () => {  
  
  return (
  <div> 
    <div id="openingText">
      <h1>M47 Weather App</h1>
      <p>Enter a City to search for the Weather</p>
    </div>
    
    <div className="App">
      <Weather/>
    </div>
  </div> 
  );
};

export default App;
