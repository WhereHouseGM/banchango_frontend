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
import ErrorPage from '../Components/ErrorPage';
import TokenAndTypeValidator from './Common/TokenAndTypeValidator';
import UseGoogleAnalytics from './GoogleAnalytics';

const BadAccessText = '잘못된 접근입니다.';

const RouterComponent = () => {
  UseGoogleAnalytics();
  return (
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
          <Message text={'여길 바꾸어라!'} />
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
      <Route path="/warehouses/detail/:warehouseId/:name">
        <Detail />
      </Route>
      <Route path="/warehouses/quotecontact/:warehouseId/:name">
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
        <ErrorPage
          title={'잘못된 접근 입니다.'}
          message={'잘못된 접근 입니다.'}
          locationToGo={'/'}
          buttonMessage={'메인 화면으로 이동'}
        />
      </Route>
      <Route path="/icon-source">
        <IconSource />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  );
};
const RouterExporter = () => {
  return (
    <Router>
      <RouterComponent />
    </Router>
  );
};

export default RouterExporter;
