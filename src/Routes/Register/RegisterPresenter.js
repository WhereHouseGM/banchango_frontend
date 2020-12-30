import Helmet from 'react-helmet';
import Register from '../../Components/Register/Register';
import PropTypes from 'prop-types';

const RegisterPresenter = ({ handleSimpleTextInput, handleRegisterSubmit }) => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 등록</title>
      </Helmet>
      <Register
        handleRegisterSubmit={handleRegisterSubmit}
        handleSimpleTextInput={handleSimpleTextInput}
      />
    </>
  );
};

RegisterPresenter.propTypes = {
  handleSimpleTextInput: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
};

export default RegisterPresenter;
