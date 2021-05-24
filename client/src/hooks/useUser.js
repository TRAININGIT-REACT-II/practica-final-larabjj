import React, { useCallback, useContext } from 'react';
import Context from '../contexts/UserContext';
import loginService from '../services/login';

export default function useUser () {
  const {token, setToken} = useContext(Context);

  const login = useCallback(({ username, password }) => {
    loginService({username, password})
    .then (token => {
      window.sessionStorage.setItem('token', token)
      setToken(token)
    })
    .catch(err => {
      window.sessionStorage.removeItem('token')
      console.error(err)
    })
  }, [setToken]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setToken(null)
  }, [setToken]);

  return {
    isLogged: Boolean(token),
    login,
    logout
  }
}
