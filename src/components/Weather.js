import React from "react"
import { useState } from "react"
import { weatherData } from "../utils/index"
import DisplayWeather from "./DisplayWeather"
import './Weather.css';

const Weather = () =>  {
    const [city,setCity] = useState();   
    const [weather, setWeather] = useState([]);  

    const submitHandler = async (event) => {
        event.preventDefault()
        if (city === undefined){
            alert("Please enter a location!")
        } else {
            await weatherData(city, setWeather)
        }   
    }

    return (
        <div className="weatherBox">
            <form onSubmit = {submitHandler}>
                <input onChange={(event) => setCity(event.target.value)} ></input>
                <button type="submit">Check Weather</button>
            </form>
            {/* DEFINING DISPLAY WEATHER SECTION CONTINUE HERE TOMORROW MORNING//  */}
        
            {
                weather.data !== undefined ? (
                    <DisplayWeather data={weather.data}/>
                ): null
            }     
        </div>
    )    
}

export default Weather