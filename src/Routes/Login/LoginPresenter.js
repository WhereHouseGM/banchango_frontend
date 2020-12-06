import Helmet from 'react-helmet';
import Login from '../../Components/Login/Login';
import PropTypes from 'prop-types';

const LoginPresenter = ({ handleInput, handleSubmit, toSignupPage }) => (
  <>
    <Helmet>
      <title>반창고 | 로그인</title>
    </Helmet>
    <Login
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      toSignupPage={toSignupPage}
    />
  </>
);

LoginPresenter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
};

export default LoginPresenter;
