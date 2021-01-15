import Helmet from 'react-helmet';
import SignUp from '../../Components/SignUp';

const SignUpPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 회원가입</title>
    </Helmet>
    <SignUp />
  </>
);

export default SignUpPresenter;
