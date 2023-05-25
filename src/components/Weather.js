import React from "react"
import { useState } from "react"
import {setWeather} from "../utils"
import { weatherData } from "../utils/index"




const Weather = () =>  {
    const [city,setCity] = useState();   
    const [weather, setWeather] = useState([]);
     

    // const API_URL =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log("!!!!!!!!!!!!!!!")
        console.log(city)
        if (city === undefined){
            alert("Please enter a location!")
        } else {
            weatherData(city,setWeather)
        }
        
    }
    return (
        <div className="weatherBox">
            <form onSubmit = {submitHandler}>
                <input onChange={(event) => setCity(event.target.value)} ></input>
                <button type="submit">Check Weather</button>
            </form>
                
        </div>
    )
}


export default Weather