import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Admin from '../../Components/Admin/Admin';
import TokenAndTypeValidator from '../../Components/Common/TokenAndTypeValidator';

const AdminPresenter = ({
  handleLoginInput,
  handleLoginSubmit,
  refreshUser,
  handleInfoInput,
  handleRegisterSubmit,
  handleMainImageSelect,
  handleMainImageSubmit,
  handleExtraImageSelect,
  handleExtraImageSubmit,
}) => (
  <>
    <Helmet>
      <title>반창고 | 관리자 페이지</title>
    </Helmet>
    <TokenAndTypeValidator />
    <Admin
      handleLoginInput={handleLoginInput}
      handleLoginSubmit={handleLoginSubmit}
      refreshUser={refreshUser}
      handleInfoInput={handleInfoInput}
      handleRegisterSubmit={handleRegisterSubmit}
      handleMainImageSelect={handleMainImageSelect}
      handleMainImageSubmit={handleMainImageSubmit}
      handleExtraImageSelect={handleExtraImageSelect}
      handleExtraImageSubmit={handleExtraImageSubmit}
    />
  </>
);

AdminPresenter.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
  handleInfoInput: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleMainImageSelect: PropTypes.func.isRequired,
  handleMainImageSubmit: PropTypes.func.isRequired,
  handleExtraImageSelect: PropTypes.func.isRequired,
  handleExtraImageSubmit: PropTypes.func.isRequired,
};

export default AdminPresenter;
