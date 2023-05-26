import React from "react"
import { weatherData } from "../utils/index"

function DisplayWeather({data}) { 

    // const { city, sys, weather } = data;
    console.log(data)
  
  return (
    <div className="weather-details">
      {/* <h2>Weather Details for {city}, {sys.country}</h2>
      <p>Current Weather: {weather.main}</p>
      <p>Temperature: {weather.temp}</p> */}
    </div>
  );
};

export default DisplayWeather