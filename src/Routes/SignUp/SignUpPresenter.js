import Helmet from 'react-helmet';
import SignUp from '../../Components/SignUp/SignUp';

const SignUpPresenter = ({ handleInput, handleSubmit }) => (
  <>
    <Helmet>
      <title>반창고 | 회원가입</title>
    </Helmet>
    <SignUp handleInput={handleInput} handleSubmit={handleSubmit} />
  </>
);

export default SignUpPresenter;
