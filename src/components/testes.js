import React, { useState, useContext } from 'react';
import { ApiContext } from '../services/api';
const Teste = () => {

    const {users} = useContext(ApiContext);
    console.log(users)
    const [repositories, setRepositories] = useState([{}])
    const [counter, setCounter] = useState(1)
    

    const handleAddRepository = () => {
        setCounter(counter +1)
        // ... significa copiar todos os valores já armazenados
        setRepositories([...repositories, { id: counter, name: "Novo Repo"+counter }])
    }

    const deletar = (id) => {
        console.log(id)
        const newList = repositories.filter((item) => item.id !==id)
        setRepositories(newList);
    }

    return (
        
        <ul>
            {
                repositories.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button type="button" onClick={() => handleAddRepository()}>
                            Adicionar
                        </button>
                        <button type="button" onClick={() => deletar(item.id)}>
                            Remove
                        </button>
                    </li>
                ))
            }
        </ul>
        
    )
}

export default Teste;