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
import QuotationList from '../Routes/MyPage/QuotationList';
import HouseList from '../Routes/MyPage/HouseList';

import Detail from '../Routes/Detail';
import Category from '../Routes/Category';
import Message from '../Components/Message';
import Admin from '../Routes/Admin';
import SiteRule from '../Routes/SiteRule';
import PrivacyPolicy from '../Routes/PrivacyPolicy';
import Register from '../Routes/Register';
import Team from '../Routes/Team';
import QuoteContact from '../Routes/Detail/QuoteContact';

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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route
            path="/admin"
            component={
              localStorage.getItem('Role') === 'ADMIN'
                ? Admin
                : () => <Message text={BadAccessText} />
            }
          />
          <Route path="/mypage" exact>
            {isLogin ? <MyPage /> : <Message text={BadAccessText} />}
          </Route>
          <Route path="/mypage/quotation">
            {isLogin ? <QuotationList /> : <Message text={BadAccessText} />}
          </Route>
          <Route path="/mypage/houselist">
            <HouseList />
          </Route>
          <Route
            path="/register"
            component={
              isOwner ? Register : () => <Message text={BadAccessText} />
            }
          />
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/warehouses/detail" component={Detail} />
          <Route path="/warehouses/quotecontact">
            <QuoteContact />
          </Route>
          <Route path="/service-agreements" component={SiteRule} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect path="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default RouterComponent;
