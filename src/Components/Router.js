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
import Message from '../Components/Message';
import Admin from '../Routes/Admin';

const BadAccessText = '잘못된 접근입니다.';

const RouterComponent = () => {
  const isLogin = JSON.parse(localStorage.getItem('Login'));
  const isAdminLogin = JSON.parse(localStorage.getItem('IsAdmin'));

  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/login"
            component={isLogin ? () => <Message text={BadAccessText} /> : Login}
          />
          <Route
            path="/signup"
            component={
              isLogin ? () => <Message text={BadAccessText} /> : SignUp
            }
          />
          {/*아래 /admin Route 삼항 연산자 순서만  바꿔주면 댐*/}
          <Route
            path="/admin"
            component={
              isAdminLogin ? () => <Message text={BadAccessText} /> : Admin
            }
          />
          <Route path="/category/:type" sensitive={true} component={Category} />
          <Route path="/warehouses/detail/:warehouseId" component={Detail} />
          <Redirect path="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
