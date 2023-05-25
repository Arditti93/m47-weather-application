import React from "react";
import {useState} from 'react';
import Weather from "./components/Weather";
// import Weather from "./components/Weather";


const App = () => {

  
  
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
