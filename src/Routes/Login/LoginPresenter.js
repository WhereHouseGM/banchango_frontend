import Helmet from 'react-helmet';
import Login from '../../Components/Login';
import PropTypes from 'prop-types';
import TokenAndTypeValidator from '../../Components/Common/TokenAndTypeValidator';

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
    <TokenAndTypeValidator />
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
