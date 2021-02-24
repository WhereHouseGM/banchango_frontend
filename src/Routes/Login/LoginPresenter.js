import Helmet from 'react-helmet';
import Login from '../../Components/Login';

const LoginPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 로그인</title>
    </Helmet>
    <Login />
  </>
);

export default LoginPresenter;
