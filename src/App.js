import React from 'react';
import Routes from './routes';
import ApiContextProvider from './services/context';


function App() {
  return (
    <ApiContextProvider>
      <Routes />
    </ApiContextProvider>
  );
}

export default App;
