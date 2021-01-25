import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { Context } from './services/context';

// isPrivate indica que a rota é privada
function CustomRoute({isPrivate, ...rest}) {
  const { auth } = useContext(Context)
  if(isPrivate && !auth){
     return <Redirect to='/login'/>
  }
  return <Route {...rest}/>
}

const Routes = () => {
  return (
    
        <Switch >
          <CustomRoute isPrivate exact path="/home" component={Home} />
          <CustomRoute exact path="/login" component={Login} />
          <CustomRoute exact path='/register' component={Register} />
        </Switch>

    
  );
}

export default Routes;
