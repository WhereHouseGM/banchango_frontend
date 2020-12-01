import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Main from '../Routes/Main';

const RouterComponent = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                {/* <Route path="/login" component={Login} /> */}
                <Redirect path="*" to="/" />
            </Switch>
        </>
    </Router>
);

export default RouterComponent;