import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {


  const [list, setList] = useState([]);
  
    const getTemp = async () => {
      try {
        const getTemps = await axios.get('http://localhost:3003/users/1/data')
        setList(getTemps.data)
      } catch (err) {
        console.error(err.message);
      }
    };
  useEffect(() => {
    getTemp()
  }, [])

  return (
    <ApiContext.Provider value={{ list }}>
      {children}
    </ApiContext.Provider>
  );
}
/*
axios.get('http://localhost:3003/users/1/data')
  .then(response => {
    for (const dataObj of response.data) {
      ids.push(parseInt(dataObj.id));
      temps.push(parseInt(dataObj.temp));
    }
  })
  .catch((error) => console.log(error))
console.log(temps, ids)
*/