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
import SiteRule from '../Routes/SiteRule';
import PrivacyPolicy from '../Routes/PrivacyPolicy';
import Register from '../Routes/Register';
import Team from '../Routes/Team';
import QuoteContact from '../Routes/Detail/QuoteContact';
import ErrorPage from '../Components/ErrorPage';
import TokenAndTypeValidator from './Common/TokenAndTypeValidator';

const BadAccessText = '잘못된 접근입니다.';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login">
        <TokenAndTypeValidator>
          <Login />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/signup">
        <TokenAndTypeValidator>
          <SignUp />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/admin">
        <TokenAndTypeValidator>
          <Message text={BadAccessText} />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/mypage" exact>
        <TokenAndTypeValidator>
          <MyPage />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/mypage/quotation">
        <TokenAndTypeValidator>
          <QuotationList />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/mypage/houselist">
        <TokenAndTypeValidator>
          <HouseList />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/register">
        <TokenAndTypeValidator>
          <Register />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/warehouses/detail/:warehouseId">
        <Detail />
      </Route>
      <Route path="/warehouses/quotecontact/:warehouseId">
        <TokenAndTypeValidator>
          <QuoteContact />
        </TokenAndTypeValidator>
      </Route>
      <Route path="/service-agreements">
        <SiteRule />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/error">
        <ErrorPage error={'잘못된 접근 입니다.'} />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default RouterComponent;
