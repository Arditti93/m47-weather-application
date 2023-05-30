const APIKEY = "d13e312e74a2fe3485762067e1129756";

export const weatherData = async (city,setWeather) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`)

        const data = await response.json()
        // console.log(data)
        setWeather({ data: data });
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, password, setUser) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    
    const data = await response.json();
    if (response.status === 200) {
      setUser({ username }); // Update the user state upon successful login
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:5001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "email": email,
          "password": password
        }),
      })

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };