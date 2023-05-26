import React from "react"
import { useState } from "react"
import {setWeather} from "../utils/index"
import { weatherData } from "../utils/index"
import { DisplayWeather } from "../utils"

const Weather = () =>  {
    const [city,setCity] = useState();   
    const [weather, setWeather] = useState([]);  

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log("!!!!!!!!!!!!!!!")
        console.log(city)
        // This will send an alert if the entry box is empty//
        if (city === undefined){
            alert("Please enter a location!")
        } else {
            weatherData(city,setWeather)
            // DisplayWeather()
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