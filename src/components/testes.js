import React, { useState, useContext } from 'react';
import { ApiContext } from '../services/api';



const Teste = () => {

    const {ids} = useContext(ApiContext);
    const {temps} = useContext(ApiContext);
    console.log(temps,ids)

    return (
        <>
    
        {
            temps.map((temperatura,index) => {
                return (
                    <ul>
                        <li key={index}>{temperatura}</li>
                    </ul>
                )
            })
        }
        </>
        
    )
}

export default Teste;