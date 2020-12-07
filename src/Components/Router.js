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
import Detail from '../Routes/Detail';
import Category from '../Routes/Category';
import Detail from '../Routes/Detail';

const RouterComponent = () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/detail" component={Detail} />
        <Route path="/category/:type" component={Category} />
        <Route path="warehouse/detail/:houseId" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default RouterComponent;
