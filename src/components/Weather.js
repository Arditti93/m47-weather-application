import React from "react"
import { useState } from "react"


const Weather = () => {
    const [city,setCity] = useState();   
    return (
        <div className="weatherBox">
            <form>
                <input onChange={(event) => setCity(event.target.value)} ></input>
                <button type="submit">Check Weather</button>
            </form>
                
        </div>
    )
}


















export default Weather

