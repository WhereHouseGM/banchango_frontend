import Helmet from 'react-helmet';
import Register from '../../Components/Register';
import TokenAndTypeValidator from '../../Components/Common/TokenAndTypeValidator'

const RegisterPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 등록</title>
      </Helmet>
      <TokenAndTypeValidator />
      <Register />
    </>
  );
};

export default RegisterPresenter;
