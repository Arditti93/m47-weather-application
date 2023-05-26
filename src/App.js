import React from "react";
import Weather from "./components/Weather";
import './App.css';
import SunnySky from "./Images/weather.jpg";

const App = () => {  
  return (
    <div className="display"> 
      <div>
        <h1>M47 Weather App</h1>
        <br />
        <p>Enter a City to search for the Weather</p>
      </div>
      <br />
      <div className="App">
        <Weather />
      </div>
      <div>
        <img src={SunnySky} alt="Myimage" />
      </div>
    </div> 
  );
};

export default App;

