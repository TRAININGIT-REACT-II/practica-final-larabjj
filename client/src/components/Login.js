import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";
import '../scss/components/_login.scss'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLogged, logout } = useUser();

  useEffect(() => {
    if (isLogged) {
      <Redirect strict from="/login" to="/" /> //He probado varias formas ya.... y nada
    }
  }, [isLogged, logout])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>

        <label>
            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button className='btn'>Login</button>
      </form>
    </>
  );
}
