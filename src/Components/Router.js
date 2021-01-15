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
import IconSource from '../Routes/IconSource';

const BadAccessText = '잘못된 접근입니다.';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/admin">
        <Message text={BadAccessText} />
      </Route>
      <Route path="/mypage" exact>
        <MyPage />
      </Route>
      <Route path="/mypage/quotation">
        <QuotationList />
      </Route>
      <Route path="/mypage/houselist">
        <HouseList />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/warehouses/detail/:warehouseId" component={Detail} />
      <Route path="/warehouses/quotecontact">
        <QuoteContact />
      </Route>
      <Route path="/service-agreements">
        <SiteRule />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/icon-source">
        <IconSource />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default RouterComponent;
