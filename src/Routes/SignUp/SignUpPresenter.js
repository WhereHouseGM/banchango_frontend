import Helmet from 'react-helmet';
import SignUp from '../../Components/SignUp';
import PropTypes from 'prop-types';

const SignUpPresenter = ({
  handleInput,
  handleSubmit,
  handlePasswordInput,
}) => (
  <>
    <Helmet>
      <title>반창고 | 회원가입</title>
    </Helmet>
    <SignUp
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handlePasswordInput={handlePasswordInput}
    />
  </>
);

SignUpPresenter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
};

export default SignUpPresenter;
