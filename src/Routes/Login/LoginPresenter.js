import Helmet from 'react-helmet';
import Login from '../../Components/Login/Login';

const LoginPresenter = ({ handleInput, handleSubmit }) => (
  <>
    <Helmet>
      <title>반창고 | 로그인</title>
    </Helmet>
    <Login handleInput={handleInput} handleSubmit={handleSubmit} />
  </>
);

export default LoginPresenter;
