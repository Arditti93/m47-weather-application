import React, { useState } from "react";
import Weather from "./components/Weather";
import './App.css';
import SunnySky from "./Images/weather.jpg";
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="display"> 
      <div>
        <h1>M47 Weather App</h1>
        <br />
      </div>
      <br />
      <div className="Register">
        {user ? (
          <h2>Welcome {user.username}!</h2>
        ) : (
          <Register setUser={setUser} />
        )}
      </div>
      <div className="Login">
        {!user ? (
          <Login setUser={setUser} />
        ) : null}
      </div>
      <div className="App">
        <p>Enter a City to search for the Weather</p>
        <Weather />
      </div>
      <div>
        <img src={SunnySky} alt="Myimage" />
      </div>
    </div> 
  );
};

export default App;

