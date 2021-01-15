import React from 'react';
import Routes from './routes';
import ApiContextProvider from './services/api';


function App() {
  return (
    <ApiContextProvider>
      <Routes />
    </ApiContextProvider>
  );
}

export default App;
