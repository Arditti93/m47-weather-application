
import React from "react";
import {useState} from 'react';
import Weather from "./components/Weather";
import './App.css';
// import SunnySky from "./src/Images/SunnySky.jpeg"
const App = () => {  
  
  return (
    
  <div className="display"> 
  {/* <img src={SunnySky} /> */}
    <div>
      <h1>M47 Weather App</h1>
      <br></br>
      <p>Enter a City to search for the Weather</p>
    </div>
    <br></br>
    <div className="App">
      <Weather/>
    </div>
  </div> 
  );
};

export default App;
