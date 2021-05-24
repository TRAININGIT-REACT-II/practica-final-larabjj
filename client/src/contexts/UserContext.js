import React, {useState} from 'react'


const User = React.createContext({});

export function UserContextProvider ({children}) {
  const [token, setToken] = useState(
    () => window.sessionStorage.getItem('token')
  );

  return <User.Provider value={{ token, setToken }}>
    {children}
  </User.Provider>
}

export default User