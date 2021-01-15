import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export const ApiContextProvider = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3003/users')
        .then(response => console.log(response))
        .catch((error) => console.log(error))
    },[])

  return (
    <ApiContextProvider value={{users}}>
        {props.children}
    </ApiContextProvider>
  );
}

export default ApiContextProvider;