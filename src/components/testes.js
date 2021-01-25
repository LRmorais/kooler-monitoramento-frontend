import React, {useState, useEffect} from 'react';
import api from '../services/api';


const Teste = () => {

    const [list, setList] = useState();


    useEffect(() => {
        getDados()

        const interval=setInterval(()=>{
            getDados()
           },5000)
           return()=>clearInterval(interval)
      }, [])

    function getDados() {
        api.get('/users/1/data')
       .then((response) => {
         setList(response.data)
       })
       .catch((error) =>{
         console.log(error)
       })
      }

      
      
      console.log(list)
    return (
        <>
            <p>ola</p>
        </>
        
    )
}

export default Teste;