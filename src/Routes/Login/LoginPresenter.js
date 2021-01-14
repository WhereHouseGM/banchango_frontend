import Helmet from 'react-helmet';
import Login from '../../Components/Login';
import PropTypes from 'prop-types';

const LoginPresenter = ({
  handleInput,
  handleSubmit,
  toSignupPage,
  handleEmailSend,
}) => (
  <>
    <Helmet>
      <title>반창고 | 로그인</title>
    </Helmet>
    <Login
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      toSignupPage={toSignupPage}
      handleEmailSend={handleEmailSend}
    />
  </>
);

LoginPresenter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
  handleEmailSend: PropTypes.func.isRequired,
};

export default LoginPresenter;
