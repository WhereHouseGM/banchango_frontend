import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Main from '../Routes/Main';
import Login from '../Routes/Login';
import SignUp from '../Routes/SignUp';
import WarehouseRegister from '../Routes/WarehouseRegister';

const RouterComponent = () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/register" component={WarehouseRegister} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default RouterComponent;
