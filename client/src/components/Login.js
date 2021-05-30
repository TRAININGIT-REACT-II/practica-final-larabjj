import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";
import '../scss/components/_login.scss'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLogged, logout, isLoginLoading, hasLoginError } = useUser();

  useEffect(() => {
    if (isLogged) {
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    }
  }, [isLogged, logout])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
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
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }    </>
  );
}
