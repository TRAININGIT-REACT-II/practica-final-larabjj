import React, {useState, createContext } from 'react'


const User = createContext({});

export function UserContext ({children}) {
  const [token, setToken] = useState(
    () => window.sessionStorage.getItem('token')
  );

  return <User.Provider value={{ token, setToken }}>
    {children}
  </User.Provider>
}

export default User