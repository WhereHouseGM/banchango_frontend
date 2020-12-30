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
import MyPage from '../Routes/MyPage';
import Detail from '../Routes/Detail';
import Category from '../Routes/Category';
import Message from '../Components/Message';
import Admin from '../Routes/Admin';
import SiteRule from '../Routes/SiteRule';
import PrivacyPolicy from '../Routes/PrivacyPolicy';
import Register from '../Routes/Register';

const BadAccessText = '잘못된 접근입니다.';

const RouterComponent = () => {
  const isLogin = JSON.parse(localStorage.getItem('Login'));
  const isOwner =
    JSON.parse(localStorage.getItem('Login')) &&
    localStorage.getItem('type') === 'OWNER';

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
          <Route
            path="/admin"
            component={
              localStorage.getItem('Role') === 'ADMIN'
                ? Admin
                : () => <Message text={BadAccessText} />
            }
          />
          <Route
            path="/mypage"
            component={
              isLogin ? MyPage : () => <Message text={BadAccessText} />
            }
          />
          <Route
            path="/register"
            component={
              isOwner ? Register : () => <Message text={BadAccessText} />
            }
          />
          <Route path="/category/:type" sensitive={true} component={Category} />
          <Route path="/warehouses/detail/:id" component={Detail} />
          <Route path="/service-agreements" component={SiteRule} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect path="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
