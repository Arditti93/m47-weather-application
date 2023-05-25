export const weatherData = async (city,setWeather) => {
    const APIKEY = "d13e312e74a2fe3485762067e1129756";
    
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)

        const data = await response.json()
        console.log(data)
        setWeather({ data: data });
    
    } catch (error) {
        console.log(error)
    }

}
