import React, { useState } from "react";
import { loginUser } from "../utils/index";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    loginUser(username, password, setUser);
  }

  return (
    <div className="Login">
      <h2>Please login below</h2>

      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={(event) => setUsername(event.target.value)}></input>
        </label>

        <br />

        <label>
          Password:
          <input type="password" onChange={(event) => setPassword(event.target.value)}></input>
        </label>

        <br />

        <button type="submit">Click here to login</button>
      </form>
    </div>
  );
};

export default Login;