import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


const Routes = () => {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default Routes;
