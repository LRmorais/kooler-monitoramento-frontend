import React, { createContext, useEffect, useState } from 'react';

import api from './api';
import {customHistory} from './history';

const Context = createContext();


function DataProvider({children}){

  const [loading, setLoading] = useState(true)

  const [auth, setAuth] = useState(false)
  // trás os dados digitados pelo usuario na login screen
  const [signUp, setSignUp] = useState(
    {email:'' ,password: ''}
  )
// quando componente for montado, verificar se tem o token e setar ele no padrão de header das requisições
  useEffect(() =>{
    const token = localStorage.getItem('token');

    if(token){
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
      setAuth(true)
    }
    setLoading(false)
  },[]);  

  // handleLogin é passado ao componente login e é executada ao clique do usuario no botão 'entrar'
  async function handleLogin(){
    api.post('/users/login', signUp)
          .then(function (response) {
              if(response.status === 200){
                const token = response.data.token
                console.log(token)
                localStorage.setItem('token',JSON.stringify(token));
                // definir o header como padrão para todas as requisições posteriores
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuth(true)
                customHistory.push("/home")
                
              }
          })
          .catch(function () {
              window.alert('Email ou senha invalidos')
          }) 
    }

  function handleLogout(){
    setAuth(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    customHistory.push("/login")
  }
// se o useEffec ainda estiver rodando na primeira inicialização, as rotas não serão renderizadas
// o que será renderizado será o loading
    if(loading){
      return <h1>Loading...</h1>
    }
  return(
    <Context.Provider value={{ auth, signUp, setSignUp, handleLogin, handleLogout}} >
      {children}
    </Context.Provider>
  );
}
// exportar DataProvider para envolver toda a aplicação que recebera os dados de contex
export { Context, DataProvider};