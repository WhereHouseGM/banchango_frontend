import Helmet from 'react-helmet';
import Register from '../../Components/Register';

const RegisterPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 허브 | 창고 등록</title>
      </Helmet>
      <Register />
    </>
  );
};

export default RegisterPresenter;
