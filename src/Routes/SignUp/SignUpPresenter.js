import Helmet from 'react-helmet';
import SignUp from '../../Components/SignUp';
import TokenAndTypeValidator from '../../Components/Common/TokenAndTypeValidator';

const SignUpPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 회원가입</title>
    </Helmet>
    <TokenAndTypeValidator />
    <SignUp />
  </>
);

export default SignUpPresenter;
