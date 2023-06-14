import React from "react"

function DisplayWeather({data}) { 

    const { name, sys, weather, main } = data;
    console.log(data)
  
  return (
    <div className="weather-details">
      <h2>Weather Details for {name}, {sys.country}</h2>
      <p>Current Weather: {weather[0].main}</p>
      <p>Temperature: {main.temp}</p>
      <p>Feels Like: {main.feels_like}</p>
      <p>Humidity: {main.humidity}</p>
    </div>
  );
};

export default DisplayWeather