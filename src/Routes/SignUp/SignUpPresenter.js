import Helmet from 'react-helmet';
import SignUp from '../../Components/SignUp/SignUp';

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

export default SignUpPresenter;
