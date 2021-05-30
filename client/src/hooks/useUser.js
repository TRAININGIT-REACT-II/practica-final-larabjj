import React, { useCallback, useContext } from 'react';
import { useState } from 'react';
import User from '../contexts/UserContext';
import loginService from '../services/login';

export default function useUser () {
  const {token, setToken} = useContext(User);
  const [state, setState] = useState({ loading: false, error: false });


  const login = useCallback(({ username, password }) => {
    setState({loading: true, error: false })
    loginService({username, password})
    .then (token => {
      window.sessionStorage.setItem('token', token)
      setState({loading: false, error: false })
      setToken(token)
    })
    .catch(err => {
      window.sessionStorage.removeItem('token')
      setState({loading: false, error: true })
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
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error
  }
}
