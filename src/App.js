import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import {customHistory} from './services/history';
import { DataProvider } from './services/context';

function App() {
  return (
    <DataProvider>
      <Router history={customHistory}>
        <Routes />
      </Router>
    </DataProvider>
  );
}

export default App;
