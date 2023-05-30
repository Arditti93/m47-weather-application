import React, { useState } from "react";
import { registerUser } from "../utils/index";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    registerUser(username, email, password);
    setUser({ username }); // Set the user state after successful registration
  }

  return (
    <div className="Register">
      <h2>Please register below</h2>

      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={(event) => setUsername(event.target.value)} required></input>
        </label>

        <br />

        <label>
          Email:
          <input onChange={(event) => setEmail(event.target.value)} required></input>
        </label>

        <br />

        <label>
          Password:
          <input type="password" onChange={(event) => setPassword(event.target.value)} required></input>
        </label>

        <br />

        <button type="submit">Click here to register</button>
            </form>
        </div>
  );
};

export default Register;